// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableImageDeprecationRequest, DisableImageDeprecationResult } from "../models/models_5";
import { de_DisableImageDeprecationCommand, se_DisableImageDeprecationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableImageDeprecationCommand}.
 */
export interface DisableImageDeprecationCommandInput extends DisableImageDeprecationRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageDeprecationCommand}.
 */
export interface DisableImageDeprecationCommandOutput extends DisableImageDeprecationResult, __MetadataBearer {}

/**
 * <p>Cancels the deprecation of the specified AMI.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageDeprecationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageDeprecationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DisableImageDeprecationRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableImageDeprecationCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageDeprecationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableImageDeprecationCommandInput - {@link DisableImageDeprecationCommandInput}
 * @returns {@link DisableImageDeprecationCommandOutput}
 * @see {@link DisableImageDeprecationCommandInput} for command's `input` shape.
 * @see {@link DisableImageDeprecationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisableImageDeprecationCommand extends $Command
  .classBuilder<
    DisableImageDeprecationCommandInput,
    DisableImageDeprecationCommandOutput,
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
  .s("AmazonEC2", "DisableImageDeprecation", {})
  .n("EC2Client", "DisableImageDeprecationCommand")
  .f(void 0, void 0)
  .ser(se_DisableImageDeprecationCommand)
  .de(de_DisableImageDeprecationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableImageDeprecationRequest;
      output: DisableImageDeprecationResult;
    };
    sdk: {
      input: DisableImageDeprecationCommandInput;
      output: DisableImageDeprecationCommandOutput;
    };
  };
}
