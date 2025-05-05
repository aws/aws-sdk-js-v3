// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableFastLaunchRequest, DisableFastLaunchResult } from "../models/models_6";
import { de_DisableFastLaunchCommand, se_DisableFastLaunchCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableFastLaunchCommand}.
 */
export interface DisableFastLaunchCommandInput extends DisableFastLaunchRequest {}
/**
 * @public
 *
 * The output of {@link DisableFastLaunchCommand}.
 */
export interface DisableFastLaunchCommandOutput extends DisableFastLaunchResult, __MetadataBearer {}

/**
 * <p>Discontinue Windows fast launch for a Windows AMI, and clean up existing pre-provisioned
 *       snapshots. After you disable Windows fast launch, the AMI uses the standard launch process for
 *       each new instance. Amazon EC2 must remove all pre-provisioned snapshots before you can enable
 *       Windows fast launch again.</p>
 *          <note>
 *             <p>You can only change these settings for Windows AMIs that you own or that have been
 *         shared with you.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableFastLaunchCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableFastLaunchCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableFastLaunchRequest
 *   ImageId: "STRING_VALUE", // required
 *   Force: true || false,
 *   DryRun: true || false,
 * };
 * const command = new DisableFastLaunchCommand(input);
 * const response = await client.send(command);
 * // { // DisableFastLaunchResult
 * //   ImageId: "STRING_VALUE",
 * //   ResourceType: "snapshot",
 * //   SnapshotConfiguration: { // FastLaunchSnapshotConfigurationResponse
 * //     TargetResourceCount: Number("int"),
 * //   },
 * //   LaunchTemplate: { // FastLaunchLaunchTemplateSpecificationResponse
 * //     LaunchTemplateId: "STRING_VALUE",
 * //     LaunchTemplateName: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //   },
 * //   MaxParallelLaunches: Number("int"),
 * //   OwnerId: "STRING_VALUE",
 * //   State: "enabling" || "enabling-failed" || "enabled" || "enabled-failed" || "disabling" || "disabling-failed",
 * //   StateTransitionReason: "STRING_VALUE",
 * //   StateTransitionTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DisableFastLaunchCommandInput - {@link DisableFastLaunchCommandInput}
 * @returns {@link DisableFastLaunchCommandOutput}
 * @see {@link DisableFastLaunchCommandInput} for command's `input` shape.
 * @see {@link DisableFastLaunchCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableFastLaunchCommand extends $Command
  .classBuilder<
    DisableFastLaunchCommandInput,
    DisableFastLaunchCommandOutput,
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
  .s("AmazonEC2", "DisableFastLaunch", {})
  .n("EC2Client", "DisableFastLaunchCommand")
  .f(void 0, void 0)
  .ser(se_DisableFastLaunchCommand)
  .de(de_DisableFastLaunchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableFastLaunchRequest;
      output: DisableFastLaunchResult;
    };
    sdk: {
      input: DisableFastLaunchCommandInput;
      output: DisableFastLaunchCommandOutput;
    };
  };
}
