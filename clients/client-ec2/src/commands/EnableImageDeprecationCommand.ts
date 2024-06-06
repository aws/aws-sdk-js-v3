// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableImageDeprecationRequest, EnableImageDeprecationResult } from "../models/models_5";
import { de_EnableImageDeprecationCommand, se_EnableImageDeprecationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableImageDeprecationCommand}.
 */
export interface EnableImageDeprecationCommandInput extends EnableImageDeprecationRequest {}
/**
 * @public
 *
 * The output of {@link EnableImageDeprecationCommand}.
 */
export interface EnableImageDeprecationCommandOutput extends EnableImageDeprecationResult, __MetadataBearer {}

/**
 * <p>Enables deprecation of the specified AMI at the specified date and time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableImageDeprecationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableImageDeprecationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableImageDeprecationRequest
 *   ImageId: "STRING_VALUE", // required
 *   DeprecateAt: new Date("TIMESTAMP"), // required
 *   DryRun: true || false,
 * };
 * const command = new EnableImageDeprecationCommand(input);
 * const response = await client.send(command);
 * // { // EnableImageDeprecationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param EnableImageDeprecationCommandInput - {@link EnableImageDeprecationCommandInput}
 * @returns {@link EnableImageDeprecationCommandOutput}
 * @see {@link EnableImageDeprecationCommandInput} for command's `input` shape.
 * @see {@link EnableImageDeprecationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class EnableImageDeprecationCommand extends $Command
  .classBuilder<
    EnableImageDeprecationCommandInput,
    EnableImageDeprecationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "EnableImageDeprecation", {})
  .n("EC2Client", "EnableImageDeprecationCommand")
  .f(void 0, void 0)
  .ser(se_EnableImageDeprecationCommand)
  .de(de_EnableImageDeprecationCommand)
  .build() {}
