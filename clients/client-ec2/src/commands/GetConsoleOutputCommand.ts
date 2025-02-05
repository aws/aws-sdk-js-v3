// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConsoleOutputRequest, GetConsoleOutputResult } from "../models/models_6";
import { de_GetConsoleOutputCommand, se_GetConsoleOutputCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConsoleOutputCommand}.
 */
export interface GetConsoleOutputCommandInput extends GetConsoleOutputRequest {}
/**
 * @public
 *
 * The output of {@link GetConsoleOutputCommand}.
 */
export interface GetConsoleOutputCommandOutput extends GetConsoleOutputResult, __MetadataBearer {}

/**
 * <p>Gets the console output for the specified instance. For Linux instances, the instance
 *             console output displays the exact console output that would normally be displayed on a
 *             physical monitor attached to a computer. For Windows instances, the instance console
 *             output includes the last three system event log errors.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance
 *                 console output</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleOutputCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleOutputCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // GetConsoleOutputRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Latest: true || false,
 *   DryRun: true || false,
 * };
 * const command = new GetConsoleOutputCommand(input);
 * const response = await client.send(command);
 * // { // GetConsoleOutputResult
 * //   InstanceId: "STRING_VALUE",
 * //   Timestamp: new Date("TIMESTAMP"),
 * //   Output: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConsoleOutputCommandInput - {@link GetConsoleOutputCommandInput}
 * @returns {@link GetConsoleOutputCommandOutput}
 * @see {@link GetConsoleOutputCommandInput} for command's `input` shape.
 * @see {@link GetConsoleOutputCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To get the console output
 * ```javascript
 * // This example gets the console output for the specified instance.
 * const input = {
 *   "InstanceId": "i-1234567890abcdef0"
 * };
 * const command = new GetConsoleOutputCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceId": "i-1234567890abcdef0",
 *   "Output": "...",
 *   "Timestamp": "2018-05-25T21:23:53.000Z"
 * }
 * *\/
 * // example id: to-get-the-console-output-1529355683194
 * ```
 *
 */
export class GetConsoleOutputCommand extends $Command
  .classBuilder<
    GetConsoleOutputCommandInput,
    GetConsoleOutputCommandOutput,
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
  .s("AmazonEC2", "GetConsoleOutput", {})
  .n("EC2Client", "GetConsoleOutputCommand")
  .f(void 0, void 0)
  .ser(se_GetConsoleOutputCommand)
  .de(de_GetConsoleOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConsoleOutputRequest;
      output: GetConsoleOutputResult;
    };
    sdk: {
      input: GetConsoleOutputCommandInput;
      output: GetConsoleOutputCommandOutput;
    };
  };
}
