// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateTransitGatewayRouteTableRequest,
  DisassociateTransitGatewayRouteTableResult,
} from "../models/models_6";
import {
  de_DisassociateTransitGatewayRouteTableCommand,
  se_DisassociateTransitGatewayRouteTableCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTransitGatewayRouteTableCommand}.
 */
export interface DisassociateTransitGatewayRouteTableCommandInput extends DisassociateTransitGatewayRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTransitGatewayRouteTableCommand}.
 */
export interface DisassociateTransitGatewayRouteTableCommandOutput
  extends DisassociateTransitGatewayRouteTableResult,
    __MetadataBearer {}

/**
 * <p>Disassociates a resource attachment from a transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateTransitGatewayRouteTableRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTransitGatewayRouteTableResult
 * //   Association: { // TransitGatewayAssociation
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateTransitGatewayRouteTableCommandInput - {@link DisassociateTransitGatewayRouteTableCommandInput}
 * @returns {@link DisassociateTransitGatewayRouteTableCommandOutput}
 * @see {@link DisassociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisassociateTransitGatewayRouteTableCommand extends $Command
  .classBuilder<
    DisassociateTransitGatewayRouteTableCommandInput,
    DisassociateTransitGatewayRouteTableCommandOutput,
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
  .s("AmazonEC2", "DisassociateTransitGatewayRouteTable", {})
  .n("EC2Client", "DisassociateTransitGatewayRouteTableCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateTransitGatewayRouteTableCommand)
  .de(de_DisassociateTransitGatewayRouteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTransitGatewayRouteTableRequest;
      output: DisassociateTransitGatewayRouteTableResult;
    };
    sdk: {
      input: DisassociateTransitGatewayRouteTableCommandInput;
      output: DisassociateTransitGatewayRouteTableCommandOutput;
    };
  };
}
