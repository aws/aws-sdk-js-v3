// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EnableImageDeregistrationProtectionRequest,
  EnableImageDeregistrationProtectionResult,
} from "../models/models_5";
import { EnableImageDeregistrationProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableImageDeregistrationProtectionCommand}.
 */
export interface EnableImageDeregistrationProtectionCommandInput extends EnableImageDeregistrationProtectionRequest {}
/**
 * @public
 *
 * The output of {@link EnableImageDeregistrationProtectionCommand}.
 */
export interface EnableImageDeregistrationProtectionCommandOutput
  extends EnableImageDeregistrationProtectionResult,
    __MetadataBearer {}

/**
 * <p>Enables deregistration protection for an AMI. When deregistration protection is enabled,
 *       the AMI can't be deregistered.</p>
 *          <p>To allow the AMI to be deregistered, you must first disable deregistration protection.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deregistration-protection.html">Protect an
 *       Amazon EC2 AMI from deregistration</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableImageDeregistrationProtectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableImageDeregistrationProtectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableImageDeregistrationProtectionRequest
 *   ImageId: "STRING_VALUE", // required
 *   WithCooldown: true || false,
 *   DryRun: true || false,
 * };
 * const command = new EnableImageDeregistrationProtectionCommand(input);
 * const response = await client.send(command);
 * // { // EnableImageDeregistrationProtectionResult
 * //   Return: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableImageDeregistrationProtectionCommandInput - {@link EnableImageDeregistrationProtectionCommandInput}
 * @returns {@link EnableImageDeregistrationProtectionCommandOutput}
 * @see {@link EnableImageDeregistrationProtectionCommandInput} for command's `input` shape.
 * @see {@link EnableImageDeregistrationProtectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableImageDeregistrationProtectionCommand extends $Command
  .classBuilder<
    EnableImageDeregistrationProtectionCommandInput,
    EnableImageDeregistrationProtectionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableImageDeregistrationProtection", {})
  .n("EC2Client", "EnableImageDeregistrationProtectionCommand")
  .sc(EnableImageDeregistrationProtection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableImageDeregistrationProtectionRequest;
      output: EnableImageDeregistrationProtectionResult;
    };
    sdk: {
      input: EnableImageDeregistrationProtectionCommandInput;
      output: EnableImageDeregistrationProtectionCommandOutput;
    };
  };
}
