// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceVpnTunnelRequest, ReplaceVpnTunnelResult } from "../models/models_8";
import { ReplaceVpnTunnel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplaceVpnTunnelCommand}.
 */
export interface ReplaceVpnTunnelCommandInput extends ReplaceVpnTunnelRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceVpnTunnelCommand}.
 */
export interface ReplaceVpnTunnelCommandOutput extends ReplaceVpnTunnelResult, __MetadataBearer {}

/**
 * <p>Trigger replacement of specified VPN tunnel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceVpnTunnelCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceVpnTunnelCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReplaceVpnTunnelRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnTunnelOutsideIpAddress: "STRING_VALUE", // required
 *   ApplyPendingMaintenance: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ReplaceVpnTunnelCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceVpnTunnelResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ReplaceVpnTunnelCommandInput - {@link ReplaceVpnTunnelCommandInput}
 * @returns {@link ReplaceVpnTunnelCommandOutput}
 * @see {@link ReplaceVpnTunnelCommandInput} for command's `input` shape.
 * @see {@link ReplaceVpnTunnelCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ReplaceVpnTunnelCommand extends $Command
  .classBuilder<
    ReplaceVpnTunnelCommandInput,
    ReplaceVpnTunnelCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ReplaceVpnTunnel", {})
  .n("EC2Client", "ReplaceVpnTunnelCommand")
  .sc(ReplaceVpnTunnel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceVpnTunnelRequest;
      output: ReplaceVpnTunnelResult;
    };
    sdk: {
      input: ReplaceVpnTunnelCommandInput;
      output: ReplaceVpnTunnelCommandOutput;
    };
  };
}
