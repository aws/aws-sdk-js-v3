// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConsoleScreenshotRequest, GetConsoleScreenshotResult } from "../models/models_5";
import { de_GetConsoleScreenshotCommand, se_GetConsoleScreenshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConsoleScreenshotCommand}.
 */
export interface GetConsoleScreenshotCommandInput extends GetConsoleScreenshotRequest {}
/**
 * @public
 *
 * The output of {@link GetConsoleScreenshotCommand}.
 */
export interface GetConsoleScreenshotCommandOutput extends GetConsoleScreenshotResult, __MetadataBearer {}

/**
 * <p>Retrieve a JPG-format screenshot of a running instance to help with
 *             troubleshooting.</p>
 *          <p>The returned content is Base64-encoded.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/troubleshoot-unreachable-instance.html#instance-console-console-output">Instance console output</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleScreenshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleScreenshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetConsoleScreenshotRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   WakeUp: true || false,
 * };
 * const command = new GetConsoleScreenshotCommand(input);
 * const response = await client.send(command);
 * // { // GetConsoleScreenshotResult
 * //   ImageData: "STRING_VALUE",
 * //   InstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConsoleScreenshotCommandInput - {@link GetConsoleScreenshotCommandInput}
 * @returns {@link GetConsoleScreenshotCommandOutput}
 * @see {@link GetConsoleScreenshotCommandInput} for command's `input` shape.
 * @see {@link GetConsoleScreenshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetConsoleScreenshotCommand extends $Command
  .classBuilder<
    GetConsoleScreenshotCommandInput,
    GetConsoleScreenshotCommandOutput,
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
  .s("AmazonEC2", "GetConsoleScreenshot", {})
  .n("EC2Client", "GetConsoleScreenshotCommand")
  .f(void 0, void 0)
  .ser(se_GetConsoleScreenshotCommand)
  .de(de_GetConsoleScreenshotCommand)
  .build() {}
