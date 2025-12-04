// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterImageRequest, DeregisterImageResult } from "../models/models_3";
import { DeregisterImage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterImageCommand}.
 */
export interface DeregisterImageCommandInput extends DeregisterImageRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterImageCommand}.
 */
export interface DeregisterImageCommandOutput extends DeregisterImageResult, __MetadataBearer {}

/**
 * <p>Deregisters the specified AMI. A deregistered AMI can't be used to launch new
 *       instances.</p>
 *          <p>If a deregistered EBS-backed AMI matches a Recycle Bin retention rule, it moves to the
 *       Recycle Bin for the specified retention period. It can be restored before its retention period
 *       expires, after which it is permanently deleted. If the deregistered AMI doesn't match a
 *       retention rule, it is permanently deleted immediately. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recover deleted Amazon EBS
 *         snapshots and EBS-backed AMIs with Recycle Bin</a> in the <i>Amazon EBS User
 *         Guide</i>.</p>
 *          <p>When deregistering an EBS-backed AMI, you can optionally delete its associated snapshots
 *       at the same time. However, if a snapshot is associated with multiple AMIs, it won't be deleted
 *       even if specified for deletion, although the AMI will still be deregistered.</p>
 *          <p>Deregistering an AMI does not delete the following:</p>
 *          <ul>
 *             <li>
 *                <p>Instances already launched from the AMI. You'll continue to incur usage costs for the
 *           instances until you terminate them.</p>
 *             </li>
 *             <li>
 *                <p>For EBS-backed AMIs: Snapshots that are associated with multiple AMIs. You'll continue
 *           to incur snapshot storage costs.</p>
 *             </li>
 *             <li>
 *                <p>For instance store-backed AMIs: The files uploaded to Amazon S3 during AMI creation. You'll
 *           continue to incur S3 storage costs.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister an Amazon EC2 AMI</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeregisterImageRequest
 *   ImageId: "STRING_VALUE", // required
 *   DeleteAssociatedSnapshots: true || false,
 *   DryRun: true || false,
 * };
 * const command = new DeregisterImageCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterImageResult
 * //   Return: true || false,
 * //   DeleteSnapshotResults: [ // DeleteSnapshotResultSet
 * //     { // DeleteSnapshotReturnCode
 * //       SnapshotId: "STRING_VALUE",
 * //       ReturnCode: "success" || "skipped" || "missing-permissions" || "internal-error" || "client-error",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeregisterImageCommandInput - {@link DeregisterImageCommandInput}
 * @returns {@link DeregisterImageCommandOutput}
 * @see {@link DeregisterImageCommandInput} for command's `input` shape.
 * @see {@link DeregisterImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeregisterImageCommand extends $Command
  .classBuilder<
    DeregisterImageCommandInput,
    DeregisterImageCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeregisterImage", {})
  .n("EC2Client", "DeregisterImageCommand")
  .sc(DeregisterImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterImageRequest;
      output: DeregisterImageResult;
    };
    sdk: {
      input: DeregisterImageCommandInput;
      output: DeregisterImageCommandOutput;
    };
  };
}
