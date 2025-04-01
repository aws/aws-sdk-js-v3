// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableImageRequest, EnableImageResult } from "../models/models_6";
import { de_EnableImageCommand, se_EnableImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableImageCommand}.
 */
export interface EnableImageCommandInput extends EnableImageRequest {}
/**
 * @public
 *
 * The output of {@link EnableImageCommand}.
 */
export interface EnableImageCommandOutput extends EnableImageResult, __MetadataBearer {}

/**
 * <p>Re-enables a disabled AMI. The re-enabled AMI is marked as <code>available</code> and can
 *       be used for instance launches, appears in describe operations, and can be shared. Amazon Web Services
 *       accounts, organizations, and Organizational Units that lost access to the AMI when it was
 *       disabled do not regain access automatically. Once the AMI is available, it can be shared with
 *       them again.</p>
 *          <p>Only the AMI owner can re-enable a disabled AMI.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/disable-an-ami.html">Disable an AMI</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableImageRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableImageCommand(input);
 * const response = await client.send(command);
 * // { // EnableImageResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param EnableImageCommandInput - {@link EnableImageCommandInput}
 * @returns {@link EnableImageCommandOutput}
 * @see {@link EnableImageCommandInput} for command's `input` shape.
 * @see {@link EnableImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableImageCommand extends $Command
  .classBuilder<
    EnableImageCommandInput,
    EnableImageCommandOutput,
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
  .s("AmazonEC2", "EnableImage", {})
  .n("EC2Client", "EnableImageCommand")
  .f(void 0, void 0)
  .ser(se_EnableImageCommand)
  .de(de_EnableImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableImageRequest;
      output: EnableImageResult;
    };
    sdk: {
      input: EnableImageCommandInput;
      output: EnableImageCommandOutput;
    };
  };
}
