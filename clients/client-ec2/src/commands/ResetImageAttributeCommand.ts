// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetImageAttributeRequest } from "../models/models_8";
import { ResetImageAttribute } from "../schemas/schemas_307_ResetImageAttribute";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetImageAttributeCommand}.
 */
export interface ResetImageAttributeCommandInput extends ResetImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetImageAttributeCommand}.
 */
export interface ResetImageAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets an attribute of an AMI to its default value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ResetImageAttributeRequest
 *   Attribute: "launchPermission", // required
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ResetImageAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetImageAttributeCommandInput - {@link ResetImageAttributeCommandInput}
 * @returns {@link ResetImageAttributeCommandOutput}
 * @see {@link ResetImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To reset the launchPermission attribute
 * ```javascript
 * // This example resets the launchPermission attribute for the specified AMI. By default, AMIs are private.
 * const input = {
 *   Attribute: "launchPermission",
 *   ImageId: "ami-5731123e"
 * };
 * const command = new ResetImageAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ResetImageAttributeCommand extends $Command
  .classBuilder<
    ResetImageAttributeCommandInput,
    ResetImageAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ResetImageAttribute", {})
  .n("EC2Client", "ResetImageAttributeCommand")
  .sc(ResetImageAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetImageAttributeRequest;
      output: {};
    };
    sdk: {
      input: ResetImageAttributeCommandInput;
      output: ResetImageAttributeCommandOutput;
    };
  };
}
