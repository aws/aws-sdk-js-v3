// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyPublicIpDnsNameOptionsRequest, ModifyPublicIpDnsNameOptionsResult } from "../models/models_7";
import { de_ModifyPublicIpDnsNameOptionsCommand, se_ModifyPublicIpDnsNameOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyPublicIpDnsNameOptionsCommand}.
 */
export interface ModifyPublicIpDnsNameOptionsCommandInput extends ModifyPublicIpDnsNameOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyPublicIpDnsNameOptionsCommand}.
 */
export interface ModifyPublicIpDnsNameOptionsCommandOutput
  extends ModifyPublicIpDnsNameOptionsResult,
    __MetadataBearer {}

/**
 * <p>Modify public hostname options for a network interface. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyPublicIpDnsNameOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyPublicIpDnsNameOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyPublicIpDnsNameOptionsRequest
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   HostnameType: "public-dual-stack-dns-name" || "public-ipv4-dns-name" || "public-ipv6-dns-name", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyPublicIpDnsNameOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyPublicIpDnsNameOptionsResult
 * //   Successful: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyPublicIpDnsNameOptionsCommandInput - {@link ModifyPublicIpDnsNameOptionsCommandInput}
 * @returns {@link ModifyPublicIpDnsNameOptionsCommandOutput}
 * @see {@link ModifyPublicIpDnsNameOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyPublicIpDnsNameOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyPublicIpDnsNameOptionsCommand extends $Command
  .classBuilder<
    ModifyPublicIpDnsNameOptionsCommandInput,
    ModifyPublicIpDnsNameOptionsCommandOutput,
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
  .s("AmazonEC2", "ModifyPublicIpDnsNameOptions", {})
  .n("EC2Client", "ModifyPublicIpDnsNameOptionsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyPublicIpDnsNameOptionsCommand)
  .de(de_ModifyPublicIpDnsNameOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyPublicIpDnsNameOptionsRequest;
      output: ModifyPublicIpDnsNameOptionsResult;
    };
    sdk: {
      input: ModifyPublicIpDnsNameOptionsCommandInput;
      output: ModifyPublicIpDnsNameOptionsCommandOutput;
    };
  };
}
