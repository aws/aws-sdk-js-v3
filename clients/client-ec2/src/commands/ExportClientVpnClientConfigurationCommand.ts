// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportClientVpnClientConfigurationRequest,
  ExportClientVpnClientConfigurationResult,
} from "../models/models_5";
import {
  de_ExportClientVpnClientConfigurationCommand,
  se_ExportClientVpnClientConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportClientVpnClientConfigurationCommand}.
 */
export interface ExportClientVpnClientConfigurationCommandInput extends ExportClientVpnClientConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ExportClientVpnClientConfigurationCommand}.
 */
export interface ExportClientVpnClientConfigurationCommandOutput
  extends ExportClientVpnClientConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration
 * 			file includes the Client VPN endpoint and certificate information clients need to establish a connection
 * 			with the Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ExportClientVpnClientConfigurationRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ExportClientVpnClientConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ExportClientVpnClientConfigurationResult
 * //   ClientConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportClientVpnClientConfigurationCommandInput - {@link ExportClientVpnClientConfigurationCommandInput}
 * @returns {@link ExportClientVpnClientConfigurationCommandOutput}
 * @see {@link ExportClientVpnClientConfigurationCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ExportClientVpnClientConfigurationCommand extends $Command
  .classBuilder<
    ExportClientVpnClientConfigurationCommandInput,
    ExportClientVpnClientConfigurationCommandOutput,
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
  .s("AmazonEC2", "ExportClientVpnClientConfiguration", {})
  .n("EC2Client", "ExportClientVpnClientConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_ExportClientVpnClientConfigurationCommand)
  .de(de_ExportClientVpnClientConfigurationCommand)
  .build() {}
