// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableFastLaunchRequest, EnableFastLaunchResult } from "../models/models_6";
import { de_EnableFastLaunchCommand, se_EnableFastLaunchCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableFastLaunchCommand}.
 */
export interface EnableFastLaunchCommandInput extends EnableFastLaunchRequest {}
/**
 * @public
 *
 * The output of {@link EnableFastLaunchCommand}.
 */
export interface EnableFastLaunchCommandOutput extends EnableFastLaunchResult, __MetadataBearer {}

/**
 * <p>When you enable Windows fast launch for a Windows AMI, images are pre-provisioned, using
 *       snapshots to launch instances up to 65% faster. To create the optimized Windows image, Amazon EC2
 *       launches an instance and runs through Sysprep steps, rebooting as required. Then it creates a
 *       set of reserved snapshots that are used for subsequent launches. The reserved snapshots are
 *       automatically replenished as they are used, depending on your settings for launch
 *       frequency.</p>
 *          <note>
 *             <p>You can only change these settings for Windows AMIs that you own or that have been
 *         shared with you.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableFastLaunchCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableFastLaunchCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableFastLaunchRequest
 *   ImageId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE",
 *   SnapshotConfiguration: { // FastLaunchSnapshotConfigurationRequest
 *     TargetResourceCount: Number("int"),
 *   },
 *   LaunchTemplate: { // FastLaunchLaunchTemplateSpecificationRequest
 *     LaunchTemplateId: "STRING_VALUE",
 *     LaunchTemplateName: "STRING_VALUE",
 *     Version: "STRING_VALUE", // required
 *   },
 *   MaxParallelLaunches: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new EnableFastLaunchCommand(input);
 * const response = await client.send(command);
 * // { // EnableFastLaunchResult
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
 * @param EnableFastLaunchCommandInput - {@link EnableFastLaunchCommandInput}
 * @returns {@link EnableFastLaunchCommandOutput}
 * @see {@link EnableFastLaunchCommandInput} for command's `input` shape.
 * @see {@link EnableFastLaunchCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableFastLaunchCommand extends $Command
  .classBuilder<
    EnableFastLaunchCommandInput,
    EnableFastLaunchCommandOutput,
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
  .s("AmazonEC2", "EnableFastLaunch", {})
  .n("EC2Client", "EnableFastLaunchCommand")
  .f(void 0, void 0)
  .ser(se_EnableFastLaunchCommand)
  .de(de_EnableFastLaunchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableFastLaunchRequest;
      output: EnableFastLaunchResult;
    };
    sdk: {
      input: EnableFastLaunchCommandInput;
      output: EnableFastLaunchCommandOutput;
    };
  };
}
