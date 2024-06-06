// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableVgwRoutePropagationRequest } from "../models/models_5";
import { de_DisableVgwRoutePropagationCommand, se_DisableVgwRoutePropagationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableVgwRoutePropagationCommand}.
 */
export interface DisableVgwRoutePropagationCommandInput extends DisableVgwRoutePropagationRequest {}
/**
 * @public
 *
 * The output of {@link DisableVgwRoutePropagationCommand}.
 */
export interface DisableVgwRoutePropagationCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables a virtual private gateway (VGW) from propagating routes to a specified route
 *             table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableVgwRoutePropagationRequest
 *   GatewayId: "STRING_VALUE", // required
 *   RouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableVgwRoutePropagationCommandInput - {@link DisableVgwRoutePropagationCommandInput}
 * @returns {@link DisableVgwRoutePropagationCommandOutput}
 * @see {@link DisableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To disable route propagation
 * ```javascript
 * // This example disables the specified virtual private gateway from propagating static routes to the specified route table.
 * const input = {
 *   "GatewayId": "vgw-9a4cacf3",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new DisableVgwRoutePropagationCommand(input);
 * await client.send(command);
 * // example id: ec2-disable-vgw-route-propagation-1
 * ```
 *
 */
export class DisableVgwRoutePropagationCommand extends $Command
  .classBuilder<
    DisableVgwRoutePropagationCommandInput,
    DisableVgwRoutePropagationCommandOutput,
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
  .s("AmazonEC2", "DisableVgwRoutePropagation", {})
  .n("EC2Client", "DisableVgwRoutePropagationCommand")
  .f(void 0, void 0)
  .ser(se_DisableVgwRoutePropagationCommand)
  .de(de_DisableVgwRoutePropagationCommand)
  .build() {}
