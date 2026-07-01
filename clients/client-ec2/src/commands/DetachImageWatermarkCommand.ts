// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachImageWatermarkRequest, DetachImageWatermarkResult } from "../models/models_5";
import { DetachImageWatermark$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetachImageWatermarkCommand}.
 */
export interface DetachImageWatermarkCommandInput extends DetachImageWatermarkRequest {}
/**
 * @public
 *
 * The output of {@link DetachImageWatermarkCommand}.
 */
export interface DetachImageWatermarkCommandOutput extends DetachImageWatermarkResult, __MetadataBearer {}

/**
 * <p>Removes a watermark from the specified AMI. This is an idempotent operation. It succeeds
 *       even if the watermark does not exist on the image.</p>
 *          <p>Removing a watermark from an image does not affect derivative images that already carry
 *       the watermark.</p>
 *          <p>Only the AMI owner can detach watermarks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachImageWatermarkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachImageWatermarkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DetachImageWatermarkRequest
 *   ImageId: "STRING_VALUE", // required
 *   WatermarkKey: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DetachImageWatermarkCommand(input);
 * const response = await client.send(command);
 * // { // DetachImageWatermarkResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DetachImageWatermarkCommandInput - {@link DetachImageWatermarkCommandInput}
 * @returns {@link DetachImageWatermarkCommandOutput}
 * @see {@link DetachImageWatermarkCommandInput} for command's `input` shape.
 * @see {@link DetachImageWatermarkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DetachImageWatermarkCommand extends command<DetachImageWatermarkCommandInput, DetachImageWatermarkCommandOutput>(
  _ep0,
  _mw0,
  "DetachImageWatermark",
  DetachImageWatermark$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachImageWatermarkRequest;
      output: DetachImageWatermarkResult;
    };
    sdk: {
      input: DetachImageWatermarkCommandInput;
      output: DetachImageWatermarkCommandOutput;
    };
  };
}
