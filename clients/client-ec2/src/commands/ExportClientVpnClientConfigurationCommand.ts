// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportClientVpnClientConfigurationRequest,
  ExportClientVpnClientConfigurationResult,
} from "../models/models_5";
import { ExportClientVpnClientConfiguration } from "../schemas/schemas_0";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ExportClientVpnClientConfiguration", {})
  .n("EC2Client", "ExportClientVpnClientConfigurationCommand")
  .sc(ExportClientVpnClientConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportClientVpnClientConfigurationRequest;
      output: ExportClientVpnClientConfigurationResult;
    };
    sdk: {
      input: ExportClientVpnClientConfigurationCommandInput;
      output: ExportClientVpnClientConfigurationCommandOutput;
    };
  };
}
