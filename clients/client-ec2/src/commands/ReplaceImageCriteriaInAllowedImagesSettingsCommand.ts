// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceImageCriteriaInAllowedImagesSettingsRequest } from "../models/models_7";
import { ReplaceImageCriteriaInAllowedImagesSettingsResult } from "../models/models_8";
import {
  de_ReplaceImageCriteriaInAllowedImagesSettingsCommand,
  se_ReplaceImageCriteriaInAllowedImagesSettingsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplaceImageCriteriaInAllowedImagesSettingsCommand}.
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsCommandInput
  extends ReplaceImageCriteriaInAllowedImagesSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceImageCriteriaInAllowedImagesSettingsCommand}.
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput
  extends ReplaceImageCriteriaInAllowedImagesSettingsResult,
    __MetadataBearer {}

/**
 * <p>Sets or replaces the criteria for Allowed AMIs.</p>
 *          <note>
 *             <p>The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of
 *         the criteria you set, the AMIs created by your account will always be discoverable and
 *         usable by users in your account.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html">Control the discovery and use of AMIs in
 *       Amazon EC2 with Allowed AMIs</a> in
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceImageCriteriaInAllowedImagesSettingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceImageCriteriaInAllowedImagesSettingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceImageCriteriaInAllowedImagesSettingsRequest
 *   ImageCriteria: [ // ImageCriterionRequestList
 *     { // ImageCriterionRequest
 *       ImageProviders: [ // ImageProviderRequestList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ReplaceImageCriteriaInAllowedImagesSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceImageCriteriaInAllowedImagesSettingsResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ReplaceImageCriteriaInAllowedImagesSettingsCommandInput - {@link ReplaceImageCriteriaInAllowedImagesSettingsCommandInput}
 * @returns {@link ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput}
 * @see {@link ReplaceImageCriteriaInAllowedImagesSettingsCommandInput} for command's `input` shape.
 * @see {@link ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ReplaceImageCriteriaInAllowedImagesSettingsCommand extends $Command
  .classBuilder<
    ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
    ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput,
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
  .s("AmazonEC2", "ReplaceImageCriteriaInAllowedImagesSettings", {})
  .n("EC2Client", "ReplaceImageCriteriaInAllowedImagesSettingsCommand")
  .f(void 0, void 0)
  .ser(se_ReplaceImageCriteriaInAllowedImagesSettingsCommand)
  .de(de_ReplaceImageCriteriaInAllowedImagesSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceImageCriteriaInAllowedImagesSettingsRequest;
      output: ReplaceImageCriteriaInAllowedImagesSettingsResult;
    };
    sdk: {
      input: ReplaceImageCriteriaInAllowedImagesSettingsCommandInput;
      output: ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput;
    };
  };
}
