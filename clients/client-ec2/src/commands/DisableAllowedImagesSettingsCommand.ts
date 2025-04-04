// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableAllowedImagesSettingsRequest, DisableAllowedImagesSettingsResult } from "../models/models_5";
import { de_DisableAllowedImagesSettingsCommand, se_DisableAllowedImagesSettingsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableAllowedImagesSettingsCommand}.
 */
export interface DisableAllowedImagesSettingsCommandInput extends DisableAllowedImagesSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisableAllowedImagesSettingsCommand}.
 */
export interface DisableAllowedImagesSettingsCommandOutput
  extends DisableAllowedImagesSettingsResult,
    __MetadataBearer {}

/**
 * <p>Disables Allowed AMIs for your account in the specified Amazon Web Services Region. When set to
 *       <code>disabled</code>, the image criteria in your Allowed AMIs settings do not apply, and no
 *       restrictions are placed on AMI discoverability or usage. Users in your account can launch
 *       instances using any public AMI or AMI shared with your account.</p>
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
 * import { EC2Client, DisableAllowedImagesSettingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableAllowedImagesSettingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableAllowedImagesSettingsRequest
 *   DryRun: true || false,
 * };
 * const command = new DisableAllowedImagesSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DisableAllowedImagesSettingsResult
 * //   AllowedImagesSettingsState: "disabled",
 * // };
 *
 * ```
 *
 * @param DisableAllowedImagesSettingsCommandInput - {@link DisableAllowedImagesSettingsCommandInput}
 * @returns {@link DisableAllowedImagesSettingsCommandOutput}
 * @see {@link DisableAllowedImagesSettingsCommandInput} for command's `input` shape.
 * @see {@link DisableAllowedImagesSettingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableAllowedImagesSettingsCommand extends $Command
  .classBuilder<
    DisableAllowedImagesSettingsCommandInput,
    DisableAllowedImagesSettingsCommandOutput,
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
  .s("AmazonEC2", "DisableAllowedImagesSettings", {})
  .n("EC2Client", "DisableAllowedImagesSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DisableAllowedImagesSettingsCommand)
  .de(de_DisableAllowedImagesSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableAllowedImagesSettingsRequest;
      output: DisableAllowedImagesSettingsResult;
    };
    sdk: {
      input: DisableAllowedImagesSettingsCommandInput;
      output: DisableAllowedImagesSettingsCommandOutput;
    };
  };
}
