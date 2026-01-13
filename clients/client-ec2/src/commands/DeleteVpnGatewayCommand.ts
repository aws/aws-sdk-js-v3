// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVpnGatewayRequest } from "../models/models_3";
import { DeleteVpnGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpnGatewayCommand}.
 */
export interface DeleteVpnGatewayCommandInput extends DeleteVpnGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpnGatewayCommand}.
 */
export interface DeleteVpnGatewayCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified virtual private gateway. You must first detach the virtual
 *             private gateway from the VPC. Note that you don't need to delete the virtual private
 *             gateway if you plan to delete and recreate the VPN connection between your VPC and your
 *             network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpnGatewayRequest
 *   VpnGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteVpnGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpnGatewayCommandInput - {@link DeleteVpnGatewayCommandInput}
 * @returns {@link DeleteVpnGatewayCommandOutput}
 * @see {@link DeleteVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpnGatewayCommand extends $Command
  .classBuilder<
    DeleteVpnGatewayCommandInput,
    DeleteVpnGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVpnGateway", {})
  .n("EC2Client", "DeleteVpnGatewayCommand")
  .sc(DeleteVpnGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpnGatewayRequest;
      output: {};
    };
    sdk: {
      input: DeleteVpnGatewayCommandInput;
      output: DeleteVpnGatewayCommandOutput;
    };
  };
}
