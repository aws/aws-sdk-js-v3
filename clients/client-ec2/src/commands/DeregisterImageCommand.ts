// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterImageRequest } from "../models/models_3";
import { de_DeregisterImageCommand, se_DeregisterImageCommand } from "../protocols/Aws_ec2";

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
export interface DeregisterImageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to
 *        launch new instances.</p>
 *          <p>If you deregister an AMI that matches a Recycle Bin retention rule, the AMI is retained
 *       in the Recycle Bin for the specified retention period. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in
 *       the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you deregister an AMI, it doesn't affect any instances that you've already
 *        launched from the AMI. You'll continue to incur usage costs for those instances until
 *        you terminate them.</p>
 *          <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was
 * 			created for the root volume of the instance during the AMI creation process. When you
 * 			deregister an instance store-backed AMI, it doesn't affect the files that you uploaded
 * 			to Amazon S3 when you created the AMI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeregisterImageRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeregisterImageCommand(input);
 * const response = await client.send(command);
 * // {};
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeregisterImage", {})
  .n("EC2Client", "DeregisterImageCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterImageCommand)
  .de(de_DeregisterImageCommand)
  .build() {}
