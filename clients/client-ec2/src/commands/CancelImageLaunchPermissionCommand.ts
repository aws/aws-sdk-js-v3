// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelImageLaunchPermissionRequest, CancelImageLaunchPermissionResult } from "../models/models_0";
import { CancelImageLaunchPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelImageLaunchPermissionCommand}.
 */
export interface CancelImageLaunchPermissionCommandInput extends CancelImageLaunchPermissionRequest {}
/**
 * @public
 *
 * The output of {@link CancelImageLaunchPermissionCommand}.
 */
export interface CancelImageLaunchPermissionCommandOutput extends CancelImageLaunchPermissionResult, __MetadataBearer {}

/**
 * <p>Removes your Amazon Web Services account from the launch permissions for the specified AMI.
 *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cancel-sharing-an-AMI.html">Cancel having an AMI shared with
 *         your Amazon Web Services account</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelImageLaunchPermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelImageLaunchPermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CancelImageLaunchPermissionRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CancelImageLaunchPermissionCommand(input);
 * const response = await client.send(command);
 * // { // CancelImageLaunchPermissionResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param CancelImageLaunchPermissionCommandInput - {@link CancelImageLaunchPermissionCommandInput}
 * @returns {@link CancelImageLaunchPermissionCommandOutput}
 * @see {@link CancelImageLaunchPermissionCommandInput} for command's `input` shape.
 * @see {@link CancelImageLaunchPermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CancelImageLaunchPermissionCommand extends $Command
  .classBuilder<
    CancelImageLaunchPermissionCommandInput,
    CancelImageLaunchPermissionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CancelImageLaunchPermission", {})
  .n("EC2Client", "CancelImageLaunchPermissionCommand")
  .sc(CancelImageLaunchPermission$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelImageLaunchPermissionRequest;
      output: CancelImageLaunchPermissionResult;
    };
    sdk: {
      input: CancelImageLaunchPermissionCommandInput;
      output: CancelImageLaunchPermissionCommandOutput;
    };
  };
}
