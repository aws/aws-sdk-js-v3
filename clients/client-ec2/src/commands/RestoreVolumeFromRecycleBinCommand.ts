// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RestoreVolumeFromRecycleBinRequest, RestoreVolumeFromRecycleBinResult } from "../models/models_7";
import { RestoreVolumeFromRecycleBin } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreVolumeFromRecycleBinCommand}.
 */
export interface RestoreVolumeFromRecycleBinCommandInput extends RestoreVolumeFromRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link RestoreVolumeFromRecycleBinCommand}.
 */
export interface RestoreVolumeFromRecycleBinCommandOutput extends RestoreVolumeFromRecycleBinResult, __MetadataBearer {}

/**
 * <p>Restores a volume from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin-working-with-volumes.html#recycle-bin-restore-volumes">Restore
 *       volumes from the Recycle Bin</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreVolumeFromRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreVolumeFromRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RestoreVolumeFromRecycleBinRequest
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RestoreVolumeFromRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // RestoreVolumeFromRecycleBinResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param RestoreVolumeFromRecycleBinCommandInput - {@link RestoreVolumeFromRecycleBinCommandInput}
 * @returns {@link RestoreVolumeFromRecycleBinCommandOutput}
 * @see {@link RestoreVolumeFromRecycleBinCommandInput} for command's `input` shape.
 * @see {@link RestoreVolumeFromRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RestoreVolumeFromRecycleBinCommand extends $Command
  .classBuilder<
    RestoreVolumeFromRecycleBinCommandInput,
    RestoreVolumeFromRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "RestoreVolumeFromRecycleBin", {})
  .n("EC2Client", "RestoreVolumeFromRecycleBinCommand")
  .sc(RestoreVolumeFromRecycleBin)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreVolumeFromRecycleBinRequest;
      output: RestoreVolumeFromRecycleBinResult;
    };
    sdk: {
      input: RestoreVolumeFromRecycleBinCommandInput;
      output: RestoreVolumeFromRecycleBinCommandOutput;
    };
  };
}
