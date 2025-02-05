// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyClientVpnEndpointRequest, ModifyClientVpnEndpointResult } from "../models/models_6";
import { de_ModifyClientVpnEndpointCommand, se_ModifyClientVpnEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClientVpnEndpointCommand}.
 */
export interface ModifyClientVpnEndpointCommandInput extends ModifyClientVpnEndpointRequest {}
/**
 * @public
 *
 * The output of {@link ModifyClientVpnEndpointCommand}.
 */
export interface ModifyClientVpnEndpointCommandOutput extends ModifyClientVpnEndpointResult, __MetadataBearer {}

/**
 * <p>Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyClientVpnEndpointRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   ServerCertificateArn: "STRING_VALUE",
 *   ConnectionLogOptions: { // ConnectionLogOptions
 *     Enabled: true || false,
 *     CloudwatchLogGroup: "STRING_VALUE",
 *     CloudwatchLogStream: "STRING_VALUE",
 *   },
 *   DnsServers: { // DnsServersOptionsModifyStructure
 *     CustomDnsServers: [ // ValueStringList
 *       "STRING_VALUE",
 *     ],
 *     Enabled: true || false,
 *   },
 *   VpnPort: Number("int"),
 *   Description: "STRING_VALUE",
 *   SplitTunnel: true || false,
 *   DryRun: true || false,
 *   SecurityGroupIds: [ // ClientVpnSecurityGroupIdSet
 *     "STRING_VALUE",
 *   ],
 *   VpcId: "STRING_VALUE",
 *   SelfServicePortal: "enabled" || "disabled",
 *   ClientConnectOptions: { // ClientConnectOptions
 *     Enabled: true || false,
 *     LambdaFunctionArn: "STRING_VALUE",
 *   },
 *   SessionTimeoutHours: Number("int"),
 *   ClientLoginBannerOptions: { // ClientLoginBannerOptions
 *     Enabled: true || false,
 *     BannerText: "STRING_VALUE",
 *   },
 *   DisconnectOnSessionTimeout: true || false,
 * };
 * const command = new ModifyClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClientVpnEndpointResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyClientVpnEndpointCommandInput - {@link ModifyClientVpnEndpointCommandInput}
 * @returns {@link ModifyClientVpnEndpointCommandOutput}
 * @see {@link ModifyClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyClientVpnEndpointCommand extends $Command
  .classBuilder<
    ModifyClientVpnEndpointCommandInput,
    ModifyClientVpnEndpointCommandOutput,
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
  .s("AmazonEC2", "ModifyClientVpnEndpoint", {})
  .n("EC2Client", "ModifyClientVpnEndpointCommand")
  .f(void 0, void 0)
  .ser(se_ModifyClientVpnEndpointCommand)
  .de(de_ModifyClientVpnEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClientVpnEndpointRequest;
      output: ModifyClientVpnEndpointResult;
    };
    sdk: {
      input: ModifyClientVpnEndpointCommandInput;
      output: ModifyClientVpnEndpointCommandOutput;
    };
  };
}
