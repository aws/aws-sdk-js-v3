// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyPrivateDnsNameOptionsRequest, ModifyPrivateDnsNameOptionsResult } from "../models/models_7";
import { de_ModifyPrivateDnsNameOptionsCommand, se_ModifyPrivateDnsNameOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyPrivateDnsNameOptionsCommand}.
 */
export interface ModifyPrivateDnsNameOptionsCommandInput extends ModifyPrivateDnsNameOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyPrivateDnsNameOptionsCommand}.
 */
export interface ModifyPrivateDnsNameOptionsCommandOutput extends ModifyPrivateDnsNameOptionsResult, __MetadataBearer {}

/**
 * <p>Modifies the options for instance hostnames for the specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyPrivateDnsNameOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyPrivateDnsNameOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyPrivateDnsNameOptionsRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   PrivateDnsHostnameType: "ip-name" || "resource-name",
 *   EnableResourceNameDnsARecord: true || false,
 *   EnableResourceNameDnsAAAARecord: true || false,
 * };
 * const command = new ModifyPrivateDnsNameOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyPrivateDnsNameOptionsResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyPrivateDnsNameOptionsCommandInput - {@link ModifyPrivateDnsNameOptionsCommandInput}
 * @returns {@link ModifyPrivateDnsNameOptionsCommandOutput}
 * @see {@link ModifyPrivateDnsNameOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyPrivateDnsNameOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyPrivateDnsNameOptionsCommand extends $Command
  .classBuilder<
    ModifyPrivateDnsNameOptionsCommandInput,
    ModifyPrivateDnsNameOptionsCommandOutput,
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
  .s("AmazonEC2", "ModifyPrivateDnsNameOptions", {})
  .n("EC2Client", "ModifyPrivateDnsNameOptionsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyPrivateDnsNameOptionsCommand)
  .de(de_ModifyPrivateDnsNameOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyPrivateDnsNameOptionsRequest;
      output: ModifyPrivateDnsNameOptionsResult;
    };
    sdk: {
      input: ModifyPrivateDnsNameOptionsCommandInput;
      output: ModifyPrivateDnsNameOptionsCommandOutput;
    };
  };
}
