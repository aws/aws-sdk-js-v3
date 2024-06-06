// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelConversionRequest } from "../models/models_0";
import { de_CancelConversionTaskCommand, se_CancelConversionTaskCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelConversionTaskCommand}.
 */
export interface CancelConversionTaskCommandInput extends CancelConversionRequest {}
/**
 * @public
 *
 * The output of {@link CancelConversionTaskCommand}.
 */
export interface CancelConversionTaskCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all
 *    artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is
 *    in the process of transferring the final disk image, the command fails and returns an exception.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon
 *     EC2 CLI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelConversionTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelConversionTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelConversionRequest
 *   ConversionTaskId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   ReasonMessage: "STRING_VALUE",
 * };
 * const command = new CancelConversionTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelConversionTaskCommandInput - {@link CancelConversionTaskCommandInput}
 * @returns {@link CancelConversionTaskCommandOutput}
 * @see {@link CancelConversionTaskCommandInput} for command's `input` shape.
 * @see {@link CancelConversionTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CancelConversionTaskCommand extends $Command
  .classBuilder<
    CancelConversionTaskCommandInput,
    CancelConversionTaskCommandOutput,
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
  .s("AmazonEC2", "CancelConversionTask", {})
  .n("EC2Client", "CancelConversionTaskCommand")
  .f(void 0, void 0)
  .ser(se_CancelConversionTaskCommand)
  .de(de_CancelConversionTaskCommand)
  .build() {}
