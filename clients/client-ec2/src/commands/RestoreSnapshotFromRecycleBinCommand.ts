// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RestoreSnapshotFromRecycleBinRequest, RestoreSnapshotFromRecycleBinResult } from "../models/models_7";
import { RestoreSnapshotFromRecycleBin$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreSnapshotFromRecycleBinCommand}.
 */
export interface RestoreSnapshotFromRecycleBinCommandInput extends RestoreSnapshotFromRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link RestoreSnapshotFromRecycleBinCommand}.
 */
export interface RestoreSnapshotFromRecycleBinCommandOutput
  extends RestoreSnapshotFromRecycleBinResult,
    __MetadataBearer {}

/**
 * <p>Restores a snapshot from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin-working-with-snaps.html#recycle-bin-restore-snaps">Restore
 *       snapshots from the Recycle Bin</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreSnapshotFromRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreSnapshotFromRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RestoreSnapshotFromRecycleBinRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RestoreSnapshotFromRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // RestoreSnapshotFromRecycleBinResult
 * //   SnapshotId: "STRING_VALUE",
 * //   OutpostArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Encrypted: true || false,
 * //   OwnerId: "STRING_VALUE",
 * //   Progress: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   State: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //   VolumeId: "STRING_VALUE",
 * //   VolumeSize: Number("int"),
 * //   SseType: "sse-ebs" || "sse-kms" || "none",
 * // };
 *
 * ```
 *
 * @param RestoreSnapshotFromRecycleBinCommandInput - {@link RestoreSnapshotFromRecycleBinCommandInput}
 * @returns {@link RestoreSnapshotFromRecycleBinCommandOutput}
 * @see {@link RestoreSnapshotFromRecycleBinCommandInput} for command's `input` shape.
 * @see {@link RestoreSnapshotFromRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RestoreSnapshotFromRecycleBinCommand extends $Command
  .classBuilder<
    RestoreSnapshotFromRecycleBinCommandInput,
    RestoreSnapshotFromRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "RestoreSnapshotFromRecycleBin", {})
  .n("EC2Client", "RestoreSnapshotFromRecycleBinCommand")
  .sc(RestoreSnapshotFromRecycleBin$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreSnapshotFromRecycleBinRequest;
      output: RestoreSnapshotFromRecycleBinResult;
    };
    sdk: {
      input: RestoreSnapshotFromRecycleBinCommandInput;
      output: RestoreSnapshotFromRecycleBinCommandOutput;
    };
  };
}
