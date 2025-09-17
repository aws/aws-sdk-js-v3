// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateTransitGatewayRouteTableRequest, AssociateTransitGatewayRouteTableResult } from "../models/models_0";
import {
  de_AssociateTransitGatewayRouteTableCommand,
  se_AssociateTransitGatewayRouteTableCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTransitGatewayRouteTableCommand}.
 */
export interface AssociateTransitGatewayRouteTableCommandInput extends AssociateTransitGatewayRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTransitGatewayRouteTableCommand}.
 */
export interface AssociateTransitGatewayRouteTableCommandOutput
  extends AssociateTransitGatewayRouteTableResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified attachment with the specified transit gateway route table. You can
 *         associate only one route table with an attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateTransitGatewayRouteTableRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTransitGatewayRouteTableResult
 * //   Association: { // TransitGatewayAssociation
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateTransitGatewayRouteTableCommandInput - {@link AssociateTransitGatewayRouteTableCommandInput}
 * @returns {@link AssociateTransitGatewayRouteTableCommandOutput}
 * @see {@link AssociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateTransitGatewayRouteTableCommand extends $Command
  .classBuilder<
    AssociateTransitGatewayRouteTableCommandInput,
    AssociateTransitGatewayRouteTableCommandOutput,
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
  .s("AmazonEC2", "AssociateTransitGatewayRouteTable", {})
  .n("EC2Client", "AssociateTransitGatewayRouteTableCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTransitGatewayRouteTableCommand)
  .de(de_AssociateTransitGatewayRouteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTransitGatewayRouteTableRequest;
      output: AssociateTransitGatewayRouteTableResult;
    };
    sdk: {
      input: AssociateTransitGatewayRouteTableCommandInput;
      output: AssociateTransitGatewayRouteTableCommandOutput;
    };
  };
}
