// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeFastLaunchImagesRequest, DescribeFastLaunchImagesResult } from "../models/models_3";
import { DescribeFastLaunchImages } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFastLaunchImagesCommand}.
 */
export interface DescribeFastLaunchImagesCommandInput extends DescribeFastLaunchImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFastLaunchImagesCommand}.
 */
export interface DescribeFastLaunchImagesCommandOutput extends DescribeFastLaunchImagesResult, __MetadataBearer {}

/**
 * <p>Describe details for Windows AMIs that are configured for Windows fast launch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFastLaunchImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFastLaunchImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeFastLaunchImagesRequest
 *   ImageIds: [ // FastLaunchImageIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeFastLaunchImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFastLaunchImagesResult
 * //   FastLaunchImages: [ // DescribeFastLaunchImagesSuccessSet
 * //     { // DescribeFastLaunchImagesSuccessItem
 * //       ImageId: "STRING_VALUE",
 * //       ResourceType: "snapshot",
 * //       SnapshotConfiguration: { // FastLaunchSnapshotConfigurationResponse
 * //         TargetResourceCount: Number("int"),
 * //       },
 * //       LaunchTemplate: { // FastLaunchLaunchTemplateSpecificationResponse
 * //         LaunchTemplateId: "STRING_VALUE",
 * //         LaunchTemplateName: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       MaxParallelLaunches: Number("int"),
 * //       OwnerId: "STRING_VALUE",
 * //       State: "enabling" || "enabling-failed" || "enabled" || "enabled-failed" || "disabling" || "disabling-failed",
 * //       StateTransitionReason: "STRING_VALUE",
 * //       StateTransitionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFastLaunchImagesCommandInput - {@link DescribeFastLaunchImagesCommandInput}
 * @returns {@link DescribeFastLaunchImagesCommandOutput}
 * @see {@link DescribeFastLaunchImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFastLaunchImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeFastLaunchImagesCommand extends $Command
  .classBuilder<
    DescribeFastLaunchImagesCommandInput,
    DescribeFastLaunchImagesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeFastLaunchImages", {})
  .n("EC2Client", "DescribeFastLaunchImagesCommand")
  .sc(DescribeFastLaunchImages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFastLaunchImagesRequest;
      output: DescribeFastLaunchImagesResult;
    };
    sdk: {
      input: DescribeFastLaunchImagesCommandInput;
      output: DescribeFastLaunchImagesCommandOutput;
    };
  };
}
