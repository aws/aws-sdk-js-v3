// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableAllowedImagesSettingsRequest, EnableAllowedImagesSettingsResult } from "../models/models_6";
import { de_EnableAllowedImagesSettingsCommand, se_EnableAllowedImagesSettingsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableAllowedImagesSettingsCommand}.
 */
export interface EnableAllowedImagesSettingsCommandInput extends EnableAllowedImagesSettingsRequest {}
/**
 * @public
 *
 * The output of {@link EnableAllowedImagesSettingsCommand}.
 */
export interface EnableAllowedImagesSettingsCommandOutput extends EnableAllowedImagesSettingsResult, __MetadataBearer {}

/**
 * <p>Enables Allowed AMIs for your account in the specified Amazon Web Services Region. Two values are
 *       accepted:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>enabled</code>: The image criteria in your Allowed AMIs settings are applied. As
 *           a result, only AMIs matching these criteria are discoverable and can be used by your
 *           account to launch instances.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>audit-mode</code>: The image criteria in your Allowed AMIs settings are not
 *           applied. No restrictions are placed on AMI discoverability or usage. Users in your account
 *           can launch instances using any public AMI or AMI shared with your account.</p>
 *                <p>The purpose of <code>audit-mode</code> is to indicate which AMIs will be affected when
 *           Allowed AMIs is <code>enabled</code>. In <code>audit-mode</code>, each AMI displays either
 *           <code>"ImageAllowed": true</code> or <code>"ImageAllowed": false</code> to indicate
 *           whether the AMI will be discoverable and available to users in the account when Allowed
 *           AMIs is enabled.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of
 *         the criteria you set, the AMIs created by your account will always be discoverable and
 *         usable by users in your account.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html">Control the discovery and use of AMIs in
 *       Amazon EC2 with Allowed AMIs</a> in
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableAllowedImagesSettingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableAllowedImagesSettingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableAllowedImagesSettingsRequest
 *   AllowedImagesSettingsState: "enabled" || "audit-mode", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableAllowedImagesSettingsCommand(input);
 * const response = await client.send(command);
 * // { // EnableAllowedImagesSettingsResult
 * //   AllowedImagesSettingsState: "enabled" || "audit-mode",
 * // };
 *
 * ```
 *
 * @param EnableAllowedImagesSettingsCommandInput - {@link EnableAllowedImagesSettingsCommandInput}
 * @returns {@link EnableAllowedImagesSettingsCommandOutput}
 * @see {@link EnableAllowedImagesSettingsCommandInput} for command's `input` shape.
 * @see {@link EnableAllowedImagesSettingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableAllowedImagesSettingsCommand extends $Command
  .classBuilder<
    EnableAllowedImagesSettingsCommandInput,
    EnableAllowedImagesSettingsCommandOutput,
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
  .s("AmazonEC2", "EnableAllowedImagesSettings", {})
  .n("EC2Client", "EnableAllowedImagesSettingsCommand")
  .f(void 0, void 0)
  .ser(se_EnableAllowedImagesSettingsCommand)
  .de(de_EnableAllowedImagesSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableAllowedImagesSettingsRequest;
      output: EnableAllowedImagesSettingsResult;
    };
    sdk: {
      input: EnableAllowedImagesSettingsCommandInput;
      output: EnableAllowedImagesSettingsCommandOutput;
    };
  };
}
