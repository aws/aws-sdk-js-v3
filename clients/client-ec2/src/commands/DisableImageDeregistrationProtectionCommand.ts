// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisableImageDeregistrationProtectionRequest,
  DisableImageDeregistrationProtectionResult,
} from "../models/models_5";
import {
  de_DisableImageDeregistrationProtectionCommand,
  se_DisableImageDeregistrationProtectionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableImageDeregistrationProtectionCommand}.
 */
export interface DisableImageDeregistrationProtectionCommandInput extends DisableImageDeregistrationProtectionRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageDeregistrationProtectionCommand}.
 */
export interface DisableImageDeregistrationProtectionCommandOutput
  extends DisableImageDeregistrationProtectionResult,
    __MetadataBearer {}

/**
 * <p>Disables deregistration protection for an AMI. When deregistration protection is disabled,
 *       the AMI can be deregistered.</p>
 *          <p>If you chose to include a 24-hour cooldown period when you enabled deregistration
 *       protection for the AMI, then, when you disable deregistration protection, you won’t
 *       immediately be able to deregister the AMI.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html#ami-deregistration-protection">Protect an
 *         AMI from deregistration</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageDeregistrationProtectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageDeregistrationProtectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DisableImageDeregistrationProtectionRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableImageDeregistrationProtectionCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageDeregistrationProtectionResult
 * //   Return: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisableImageDeregistrationProtectionCommandInput - {@link DisableImageDeregistrationProtectionCommandInput}
 * @returns {@link DisableImageDeregistrationProtectionCommandOutput}
 * @see {@link DisableImageDeregistrationProtectionCommandInput} for command's `input` shape.
 * @see {@link DisableImageDeregistrationProtectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisableImageDeregistrationProtectionCommand extends $Command
  .classBuilder<
    DisableImageDeregistrationProtectionCommandInput,
    DisableImageDeregistrationProtectionCommandOutput,
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
  .s("AmazonEC2", "DisableImageDeregistrationProtection", {})
  .n("EC2Client", "DisableImageDeregistrationProtectionCommand")
  .f(void 0, void 0)
  .ser(se_DisableImageDeregistrationProtectionCommand)
  .de(de_DisableImageDeregistrationProtectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableImageDeregistrationProtectionRequest;
      output: DisableImageDeregistrationProtectionResult;
    };
    sdk: {
      input: DisableImageDeregistrationProtectionCommandInput;
      output: DisableImageDeregistrationProtectionCommandOutput;
    };
  };
}
