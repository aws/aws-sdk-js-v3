// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetVpnConnectionDeviceSampleConfigurationRequest,
  GetVpnConnectionDeviceSampleConfigurationResult,
  GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog,
} from "../models/models_6";
import {
  de_GetVpnConnectionDeviceSampleConfigurationCommand,
  se_GetVpnConnectionDeviceSampleConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpnConnectionDeviceSampleConfigurationCommand}.
 */
export interface GetVpnConnectionDeviceSampleConfigurationCommandInput
  extends GetVpnConnectionDeviceSampleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVpnConnectionDeviceSampleConfigurationCommand}.
 */
export interface GetVpnConnectionDeviceSampleConfigurationCommandOutput
  extends GetVpnConnectionDeviceSampleConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Download an Amazon Web Services-provided sample configuration file to be used with the customer
 *             gateway device specified for your Site-to-Site VPN connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // GetVpnConnectionDeviceSampleConfigurationRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnConnectionDeviceTypeId: "STRING_VALUE", // required
 *   InternetKeyExchangeVersion: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetVpnConnectionDeviceSampleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVpnConnectionDeviceSampleConfigurationResult
 * //   VpnConnectionDeviceSampleConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpnConnectionDeviceSampleConfigurationCommandInput - {@link GetVpnConnectionDeviceSampleConfigurationCommandInput}
 * @returns {@link GetVpnConnectionDeviceSampleConfigurationCommandOutput}
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetVpnConnectionDeviceSampleConfigurationCommand extends $Command
  .classBuilder<
    GetVpnConnectionDeviceSampleConfigurationCommandInput,
    GetVpnConnectionDeviceSampleConfigurationCommandOutput,
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
  .s("AmazonEC2", "GetVpnConnectionDeviceSampleConfiguration", {})
  .n("EC2Client", "GetVpnConnectionDeviceSampleConfigurationCommand")
  .f(void 0, GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog)
  .ser(se_GetVpnConnectionDeviceSampleConfigurationCommand)
  .de(de_GetVpnConnectionDeviceSampleConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpnConnectionDeviceSampleConfigurationRequest;
      output: GetVpnConnectionDeviceSampleConfigurationResult;
    };
    sdk: {
      input: GetVpnConnectionDeviceSampleConfigurationCommandInput;
      output: GetVpnConnectionDeviceSampleConfigurationCommandOutput;
    };
  };
}
