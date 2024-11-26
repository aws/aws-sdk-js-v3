// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFpgaImageRequest, DeleteFpgaImageResult } from "../models/models_3";
import { de_DeleteFpgaImageCommand, se_DeleteFpgaImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFpgaImageCommand}.
 */
export interface DeleteFpgaImageCommandInput extends DeleteFpgaImageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFpgaImageCommand}.
 */
export interface DeleteFpgaImageCommandOutput extends DeleteFpgaImageResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteFpgaImageRequest
 *   DryRun: true || false,
 *   FpgaImageId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFpgaImageCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFpgaImageResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteFpgaImageCommandInput - {@link DeleteFpgaImageCommandInput}
 * @returns {@link DeleteFpgaImageCommandOutput}
 * @see {@link DeleteFpgaImageCommandInput} for command's `input` shape.
 * @see {@link DeleteFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteFpgaImageCommand extends $Command
  .classBuilder<
    DeleteFpgaImageCommandInput,
    DeleteFpgaImageCommandOutput,
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
  .s("AmazonEC2", "DeleteFpgaImage", {})
  .n("EC2Client", "DeleteFpgaImageCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFpgaImageCommand)
  .de(de_DeleteFpgaImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFpgaImageRequest;
      output: DeleteFpgaImageResult;
    };
    sdk: {
      input: DeleteFpgaImageCommandInput;
      output: DeleteFpgaImageCommandOutput;
    };
  };
}
