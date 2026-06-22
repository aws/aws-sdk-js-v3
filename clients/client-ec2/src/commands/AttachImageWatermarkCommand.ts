// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AttachImageWatermarkRequest, AttachImageWatermarkResult } from "../models/models_0";
import { AttachImageWatermark$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachImageWatermarkCommand}.
 */
export interface AttachImageWatermarkCommandInput extends AttachImageWatermarkRequest {}
/**
 * @public
 *
 * The output of {@link AttachImageWatermarkCommand}.
 */
export interface AttachImageWatermarkCommandOutput extends AttachImageWatermarkResult, __MetadataBearer {}

/**
 * <p>Attaches a watermark to a non-public AMI. The watermark is a structured identifier that
 *       automatically propagates to all derivative images created through
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>, and
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyImage.html">CopyImage</a>.</p>
 *          <p>Only the AMI owner can attach watermarks. Watermarks cannot be added to public
 *       AMIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachImageWatermarkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachImageWatermarkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AttachImageWatermarkRequest
 *   ImageId: "STRING_VALUE", // required
 *   WatermarkName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AttachImageWatermarkCommand(input);
 * const response = await client.send(command);
 * // { // AttachImageWatermarkResult
 * //   WatermarkKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AttachImageWatermarkCommandInput - {@link AttachImageWatermarkCommandInput}
 * @returns {@link AttachImageWatermarkCommandOutput}
 * @see {@link AttachImageWatermarkCommandInput} for command's `input` shape.
 * @see {@link AttachImageWatermarkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AttachImageWatermarkCommand extends $Command
  .classBuilder<
    AttachImageWatermarkCommandInput,
    AttachImageWatermarkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AttachImageWatermark", {})
  .n("EC2Client", "AttachImageWatermarkCommand")
  .sc(AttachImageWatermark$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachImageWatermarkRequest;
      output: AttachImageWatermarkResult;
    };
    sdk: {
      input: AttachImageWatermarkCommandInput;
      output: AttachImageWatermarkCommandOutput;
    };
  };
}
