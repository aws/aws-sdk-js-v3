// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableVgwRoutePropagationRequest } from "../models/models_5";
import { de_EnableVgwRoutePropagationCommand, se_EnableVgwRoutePropagationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableVgwRoutePropagationCommand}.
 */
export interface EnableVgwRoutePropagationCommandInput extends EnableVgwRoutePropagationRequest {}
/**
 * @public
 *
 * The output of {@link EnableVgwRoutePropagationCommand}.
 */
export interface EnableVgwRoutePropagationCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables a virtual private gateway (VGW) to propagate routes to the specified route
 *             table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableVgwRoutePropagationRequest
 *   GatewayId: "STRING_VALUE", // required
 *   RouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableVgwRoutePropagationCommandInput - {@link EnableVgwRoutePropagationCommandInput}
 * @returns {@link EnableVgwRoutePropagationCommandOutput}
 * @see {@link EnableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link EnableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To enable route propagation
 * ```javascript
 * // This example enables the specified virtual private gateway to propagate static routes to the specified route table.
 * const input = {
 *   "GatewayId": "vgw-9a4cacf3",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new EnableVgwRoutePropagationCommand(input);
 * await client.send(command);
 * // example id: ec2-enable-vgw-route-propagation-1
 * ```
 *
 */
export class EnableVgwRoutePropagationCommand extends $Command
  .classBuilder<
    EnableVgwRoutePropagationCommandInput,
    EnableVgwRoutePropagationCommandOutput,
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
  .s("AmazonEC2", "EnableVgwRoutePropagation", {})
  .n("EC2Client", "EnableVgwRoutePropagationCommand")
  .f(void 0, void 0)
  .ser(se_EnableVgwRoutePropagationCommand)
  .de(de_EnableVgwRoutePropagationCommand)
  .build() {}
