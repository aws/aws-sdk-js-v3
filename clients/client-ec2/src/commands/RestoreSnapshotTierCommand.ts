// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreSnapshotTierRequest, RestoreSnapshotTierResult } from "../models/models_7";
import { de_RestoreSnapshotTierCommand, se_RestoreSnapshotTierCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreSnapshotTierCommand}.
 */
export interface RestoreSnapshotTierCommandInput extends RestoreSnapshotTierRequest {}
/**
 * @public
 *
 * The output of {@link RestoreSnapshotTierCommand}.
 */
export interface RestoreSnapshotTierCommandOutput extends RestoreSnapshotTierResult, __MetadataBearer {}

/**
 * <p>Restores an archived Amazon EBS snapshot for use temporarily or permanently, or modifies the restore
 *       period or restore type for a snapshot that was previously temporarily restored.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/working-with-snapshot-archiving.html#restore-archived-snapshot">
 *       Restore an archived snapshot</a> and <a href="https://docs.aws.amazon.com/ebs/latest/userguide/working-with-snapshot-archiving.html#modify-temp-restore-period">
 *         modify the restore period or restore type for a temporarily restored snapshot</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreSnapshotTierCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreSnapshotTierCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // RestoreSnapshotTierRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   TemporaryRestoreDays: Number("int"),
 *   PermanentRestore: true || false,
 *   DryRun: true || false,
 * };
 * const command = new RestoreSnapshotTierCommand(input);
 * const response = await client.send(command);
 * // { // RestoreSnapshotTierResult
 * //   SnapshotId: "STRING_VALUE",
 * //   RestoreStartTime: new Date("TIMESTAMP"),
 * //   RestoreDuration: Number("int"),
 * //   IsPermanentRestore: true || false,
 * // };
 *
 * ```
 *
 * @param RestoreSnapshotTierCommandInput - {@link RestoreSnapshotTierCommandInput}
 * @returns {@link RestoreSnapshotTierCommandOutput}
 * @see {@link RestoreSnapshotTierCommandInput} for command's `input` shape.
 * @see {@link RestoreSnapshotTierCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class RestoreSnapshotTierCommand extends $Command
  .classBuilder<
    RestoreSnapshotTierCommandInput,
    RestoreSnapshotTierCommandOutput,
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
  .s("AmazonEC2", "RestoreSnapshotTier", {})
  .n("EC2Client", "RestoreSnapshotTierCommand")
  .f(void 0, void 0)
  .ser(se_RestoreSnapshotTierCommand)
  .de(de_RestoreSnapshotTierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreSnapshotTierRequest;
      output: RestoreSnapshotTierResult;
    };
    sdk: {
      input: RestoreSnapshotTierCommandInput;
      output: RestoreSnapshotTierCommandOutput;
    };
  };
}
