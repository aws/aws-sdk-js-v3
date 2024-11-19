// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreImageFromRecycleBinRequest, RestoreImageFromRecycleBinResult } from "../models/models_7";
import { de_RestoreImageFromRecycleBinCommand, se_RestoreImageFromRecycleBinCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreImageFromRecycleBinCommand}.
 */
export interface RestoreImageFromRecycleBinCommandInput extends RestoreImageFromRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link RestoreImageFromRecycleBinCommand}.
 */
export interface RestoreImageFromRecycleBinCommandOutput extends RestoreImageFromRecycleBinResult, __MetadataBearer {}

/**
 * <p>Restores an AMI from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in
 *       the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreImageFromRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreImageFromRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RestoreImageFromRecycleBinRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RestoreImageFromRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // RestoreImageFromRecycleBinResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param RestoreImageFromRecycleBinCommandInput - {@link RestoreImageFromRecycleBinCommandInput}
 * @returns {@link RestoreImageFromRecycleBinCommandOutput}
 * @see {@link RestoreImageFromRecycleBinCommandInput} for command's `input` shape.
 * @see {@link RestoreImageFromRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class RestoreImageFromRecycleBinCommand extends $Command
  .classBuilder<
    RestoreImageFromRecycleBinCommandInput,
    RestoreImageFromRecycleBinCommandOutput,
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
  .s("AmazonEC2", "RestoreImageFromRecycleBin", {})
  .n("EC2Client", "RestoreImageFromRecycleBinCommand")
  .f(void 0, void 0)
  .ser(se_RestoreImageFromRecycleBinCommand)
  .de(de_RestoreImageFromRecycleBinCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreImageFromRecycleBinRequest;
      output: RestoreImageFromRecycleBinResult;
    };
    sdk: {
      input: RestoreImageFromRecycleBinCommandInput;
      output: RestoreImageFromRecycleBinCommandOutput;
    };
  };
}
