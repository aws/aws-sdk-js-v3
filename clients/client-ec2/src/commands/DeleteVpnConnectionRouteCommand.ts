// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVpnConnectionRouteRequest } from "../models/models_3";
import { DeleteVpnConnectionRoute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpnConnectionRouteCommand}.
 */
export interface DeleteVpnConnectionRouteCommandInput extends DeleteVpnConnectionRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpnConnectionRouteCommand}.
 */
export interface DeleteVpnConnectionRouteCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified static route associated with a VPN connection between an
 *             existing virtual private gateway and a VPN customer gateway. The static route allows
 *             traffic to be routed from the virtual private gateway to the VPN customer
 *             gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnConnectionRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnConnectionRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpnConnectionRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   VpnConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpnConnectionRouteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpnConnectionRouteCommandInput - {@link DeleteVpnConnectionRouteCommandInput}
 * @returns {@link DeleteVpnConnectionRouteCommandOutput}
 * @see {@link DeleteVpnConnectionRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnConnectionRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpnConnectionRouteCommand extends $Command
  .classBuilder<
    DeleteVpnConnectionRouteCommandInput,
    DeleteVpnConnectionRouteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVpnConnectionRoute", {})
  .n("EC2Client", "DeleteVpnConnectionRouteCommand")
  .sc(DeleteVpnConnectionRoute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpnConnectionRouteRequest;
      output: {};
    };
    sdk: {
      input: DeleteVpnConnectionRouteCommandInput;
      output: DeleteVpnConnectionRouteCommandOutput;
    };
  };
}
