// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableImageBlockPublicAccessRequest, DisableImageBlockPublicAccessResult } from "../models/models_6";
import { de_DisableImageBlockPublicAccessCommand, se_DisableImageBlockPublicAccessCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableImageBlockPublicAccessCommand}.
 */
export interface DisableImageBlockPublicAccessCommandInput extends DisableImageBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageBlockPublicAccessCommand}.
 */
export interface DisableImageBlockPublicAccessCommandOutput
  extends DisableImageBlockPublicAccessResult,
    __MetadataBearer {}

/**
 * <p>Disables <i>block public access for AMIs</i> at the account level in the
 *       specified Amazon Web Services Region. This removes the <i>block public access</i> restriction
 *       from your account. With the restriction removed, you can publicly share your AMIs in the
 *       specified Amazon Web Services Region.</p>
 *          <p>The API can take up to 10 minutes to configure this setting. During this time, if you run
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetImageBlockPublicAccessState.html">GetImageBlockPublicAccessState</a>, the response will be
 *       <code>block-new-sharing</code>. When the API has completed the configuration, the response
 *       will be <code>unblocked</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html#block-public-access-to-amis">Block
 *       public access to your AMIs</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableImageBlockPublicAccessRequest
 *   DryRun: true || false,
 * };
 * const command = new DisableImageBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageBlockPublicAccessResult
 * //   ImageBlockPublicAccessState: "unblocked",
 * // };
 *
 * ```
 *
 * @param DisableImageBlockPublicAccessCommandInput - {@link DisableImageBlockPublicAccessCommandInput}
 * @returns {@link DisableImageBlockPublicAccessCommandOutput}
 * @see {@link DisableImageBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link DisableImageBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableImageBlockPublicAccessCommand extends $Command
  .classBuilder<
    DisableImageBlockPublicAccessCommandInput,
    DisableImageBlockPublicAccessCommandOutput,
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
  .s("AmazonEC2", "DisableImageBlockPublicAccess", {})
  .n("EC2Client", "DisableImageBlockPublicAccessCommand")
  .f(void 0, void 0)
  .ser(se_DisableImageBlockPublicAccessCommand)
  .de(de_DisableImageBlockPublicAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableImageBlockPublicAccessRequest;
      output: DisableImageBlockPublicAccessResult;
    };
    sdk: {
      input: DisableImageBlockPublicAccessCommandInput;
      output: DisableImageBlockPublicAccessCommandOutput;
    };
  };
}
