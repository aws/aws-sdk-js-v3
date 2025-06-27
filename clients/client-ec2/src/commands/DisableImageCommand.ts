// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableImageRequest, DisableImageResult } from "../models/models_6";
import { de_DisableImageCommand, se_DisableImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableImageCommand}.
 */
export interface DisableImageCommandInput extends DisableImageRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageCommand}.
 */
export interface DisableImageCommandOutput extends DisableImageResult, __MetadataBearer {}

/**
 * <p>Sets the AMI state to <code>disabled</code> and removes all launch permissions from the
 *       AMI. A disabled AMI can't be used for instance launches.</p>
 *          <p>A disabled AMI can't be shared. If an AMI was public or previously shared, it is made
 *       private. If an AMI was shared with an Amazon Web Services account, organization, or Organizational Unit,
 *       they lose access to the disabled AMI. </p>
 *          <p>A disabled AMI does not appear in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a> API calls by
 *       default.</p>
 *          <p>Only the AMI owner can disable an AMI.</p>
 *          <p>You can re-enable a disabled AMI using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableImage.html">EnableImage</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/disable-an-ami.html">Disable an AMI</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableImageRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableImageCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableImageCommandInput - {@link DisableImageCommandInput}
 * @returns {@link DisableImageCommandOutput}
 * @see {@link DisableImageCommandInput} for command's `input` shape.
 * @see {@link DisableImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableImageCommand extends $Command
  .classBuilder<
    DisableImageCommandInput,
    DisableImageCommandOutput,
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
  .s("AmazonEC2", "DisableImage", {})
  .n("EC2Client", "DisableImageCommand")
  .f(void 0, void 0)
  .ser(se_DisableImageCommand)
  .de(de_DisableImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableImageRequest;
      output: DisableImageResult;
    };
    sdk: {
      input: DisableImageCommandInput;
      output: DisableImageCommandOutput;
    };
  };
}
