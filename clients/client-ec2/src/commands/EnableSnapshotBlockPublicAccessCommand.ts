// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableSnapshotBlockPublicAccessRequest, EnableSnapshotBlockPublicAccessResult } from "../models/models_5";
import {
  de_EnableSnapshotBlockPublicAccessCommand,
  se_EnableSnapshotBlockPublicAccessCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableSnapshotBlockPublicAccessCommand}.
 */
export interface EnableSnapshotBlockPublicAccessCommandInput extends EnableSnapshotBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link EnableSnapshotBlockPublicAccessCommand}.
 */
export interface EnableSnapshotBlockPublicAccessCommandOutput
  extends EnableSnapshotBlockPublicAccessResult,
    __MetadataBearer {}

/**
 * <p>Enables or modifies the <i>block public access for snapshots</i>
 *       setting at the account level for the specified Amazon Web Services Region. After you enable block
 *       public access for snapshots in a Region, users can no longer request public sharing
 *       for snapshots in that Region. Snapshots that are already publicly shared are either
 *       treated as private or they remain publicly shared, depending on the
 *       <b>State</b> that you specify.</p>
 *          <p>If block public access is enabled in <code>block-all-sharing</code> mode, and
 *       you change the mode to <code>block-new-sharing</code>, all snapshots that were
 *       previously publicly shared are no longer treated as private and they become publicly
 *       accessible again.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/block-public-access-snapshots.html">
 *       Block public access for snapshots</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableSnapshotBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableSnapshotBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableSnapshotBlockPublicAccessRequest
 *   State: "block-all-sharing" || "block-new-sharing" || "unblocked", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableSnapshotBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // EnableSnapshotBlockPublicAccessResult
 * //   State: "block-all-sharing" || "block-new-sharing" || "unblocked",
 * // };
 *
 * ```
 *
 * @param EnableSnapshotBlockPublicAccessCommandInput - {@link EnableSnapshotBlockPublicAccessCommandInput}
 * @returns {@link EnableSnapshotBlockPublicAccessCommandOutput}
 * @see {@link EnableSnapshotBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link EnableSnapshotBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class EnableSnapshotBlockPublicAccessCommand extends $Command
  .classBuilder<
    EnableSnapshotBlockPublicAccessCommandInput,
    EnableSnapshotBlockPublicAccessCommandOutput,
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
  .s("AmazonEC2", "EnableSnapshotBlockPublicAccess", {})
  .n("EC2Client", "EnableSnapshotBlockPublicAccessCommand")
  .f(void 0, void 0)
  .ser(se_EnableSnapshotBlockPublicAccessCommand)
  .de(de_EnableSnapshotBlockPublicAccessCommand)
  .build() {}
