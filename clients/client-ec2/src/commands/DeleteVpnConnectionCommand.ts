// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpnConnectionRequest } from "../models/models_3";
import { de_DeleteVpnConnectionCommand, se_DeleteVpnConnectionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpnConnectionCommand}.
 */
export interface DeleteVpnConnectionCommandInput extends DeleteVpnConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpnConnectionCommand}.
 */
export interface DeleteVpnConnectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified VPN connection.</p>
 *          <p>If you're deleting the VPC and its associated components, we recommend that you detach
 *             the virtual private gateway from the VPC and delete the VPC before deleting the VPN
 *             connection. If you believe that the tunnel credentials for your VPN connection have been
 *             compromised, you can delete the VPN connection and create a new one that has new keys,
 *             without needing to delete the VPC or virtual private gateway. If you create a new VPN
 *             connection, you must reconfigure the customer gateway device using the new configuration
 *             information returned with the new VPN connection ID.</p>
 *          <p>For certificate-based authentication, delete all Certificate Manager (ACM) private
 *             certificates used for the Amazon Web Services-side tunnel endpoints for the VPN
 *             connection before deleting the VPN connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVpnConnectionRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteVpnConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpnConnectionCommandInput - {@link DeleteVpnConnectionCommandInput}
 * @returns {@link DeleteVpnConnectionCommandOutput}
 * @see {@link DeleteVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpnConnectionCommand extends $Command
  .classBuilder<
    DeleteVpnConnectionCommandInput,
    DeleteVpnConnectionCommandOutput,
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
  .s("AmazonEC2", "DeleteVpnConnection", {})
  .n("EC2Client", "DeleteVpnConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpnConnectionCommand)
  .de(de_DeleteVpnConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpnConnectionRequest;
      output: {};
    };
    sdk: {
      input: DeleteVpnConnectionCommandInput;
      output: DeleteVpnConnectionCommandOutput;
    };
  };
}
