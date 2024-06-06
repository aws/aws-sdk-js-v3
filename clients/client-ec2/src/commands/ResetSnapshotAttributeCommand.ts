// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetSnapshotAttributeRequest } from "../models/models_7";
import { de_ResetSnapshotAttributeCommand, se_ResetSnapshotAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetSnapshotAttributeCommand}.
 */
export interface ResetSnapshotAttributeCommandInput extends ResetSnapshotAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetSnapshotAttributeCommand}.
 */
export interface ResetSnapshotAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets permission settings for the specified snapshot.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ResetSnapshotAttributeRequest
 *   Attribute: "productCodes" || "createVolumePermission", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ResetSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetSnapshotAttributeCommandInput - {@link ResetSnapshotAttributeCommandInput}
 * @returns {@link ResetSnapshotAttributeCommandOutput}
 * @see {@link ResetSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To reset a snapshot attribute
 * ```javascript
 * // This example resets the create volume permissions for snapshot ``snap-1234567890abcdef0``. If the command succeeds, no output is returned.
 * const input = {
 *   "Attribute": "createVolumePermission",
 *   "SnapshotId": "snap-1234567890abcdef0"
 * };
 * const command = new ResetSnapshotAttributeCommand(input);
 * await client.send(command);
 * // example id: to-reset-a-snapshot-attribute-1472508825735
 * ```
 *
 */
export class ResetSnapshotAttributeCommand extends $Command
  .classBuilder<
    ResetSnapshotAttributeCommandInput,
    ResetSnapshotAttributeCommandOutput,
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
  .s("AmazonEC2", "ResetSnapshotAttribute", {})
  .n("EC2Client", "ResetSnapshotAttributeCommand")
  .f(void 0, void 0)
  .ser(se_ResetSnapshotAttributeCommand)
  .de(de_ResetSnapshotAttributeCommand)
  .build() {}
