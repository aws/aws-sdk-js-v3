// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyFpgaImageRequest, CopyFpgaImageResult } from "../models/models_0";
import { de_CopyFpgaImageCommand, se_CopyFpgaImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyFpgaImageCommand}.
 */
export interface CopyFpgaImageCommandInput extends CopyFpgaImageRequest {}
/**
 * @public
 *
 * The output of {@link CopyFpgaImageCommand}.
 */
export interface CopyFpgaImageCommandOutput extends CopyFpgaImageResult, __MetadataBearer {}

/**
 * <p>Copies the specified Amazon FPGA Image (AFI) to the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CopyFpgaImageRequest
 *   DryRun: true || false,
 *   SourceFpgaImageId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   SourceRegion: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CopyFpgaImageCommand(input);
 * const response = await client.send(command);
 * // { // CopyFpgaImageResult
 * //   FpgaImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyFpgaImageCommandInput - {@link CopyFpgaImageCommandInput}
 * @returns {@link CopyFpgaImageCommandOutput}
 * @see {@link CopyFpgaImageCommandInput} for command's `input` shape.
 * @see {@link CopyFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CopyFpgaImageCommand extends $Command
  .classBuilder<
    CopyFpgaImageCommandInput,
    CopyFpgaImageCommandOutput,
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
  .s("AmazonEC2", "CopyFpgaImage", {})
  .n("EC2Client", "CopyFpgaImageCommand")
  .f(void 0, void 0)
  .ser(se_CopyFpgaImageCommand)
  .de(de_CopyFpgaImageCommand)
  .build() {}
