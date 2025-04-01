// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAllowedImagesSettingsRequest, GetAllowedImagesSettingsResult } from "../models/models_6";
import { de_GetAllowedImagesSettingsCommand, se_GetAllowedImagesSettingsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAllowedImagesSettingsCommand}.
 */
export interface GetAllowedImagesSettingsCommandInput extends GetAllowedImagesSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAllowedImagesSettingsCommand}.
 */
export interface GetAllowedImagesSettingsCommandOutput extends GetAllowedImagesSettingsResult, __MetadataBearer {}

/**
 * <p>Gets the current state of the Allowed AMIs setting and the list of Allowed AMIs criteria
 *       at the account level in the specified Region.</p>
 *          <note>
 *             <p>The Allowed AMIs feature does not restrict the AMIs owned by your account. Regardless of
 *         the criteria you set, the AMIs created by your account will always be discoverable and
 *         usable by users in your account.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html">Control the discovery and use of AMIs in
 *           Amazon EC2 with Allowed AMIs</a> in
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAllowedImagesSettingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAllowedImagesSettingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetAllowedImagesSettingsRequest
 *   DryRun: true || false,
 * };
 * const command = new GetAllowedImagesSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAllowedImagesSettingsResult
 * //   State: "STRING_VALUE",
 * //   ImageCriteria: [ // ImageCriterionList
 * //     { // ImageCriterion
 * //       ImageProviders: [ // ImageProviderList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ManagedBy: "account" || "declarative-policy",
 * // };
 *
 * ```
 *
 * @param GetAllowedImagesSettingsCommandInput - {@link GetAllowedImagesSettingsCommandInput}
 * @returns {@link GetAllowedImagesSettingsCommandOutput}
 * @see {@link GetAllowedImagesSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAllowedImagesSettingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetAllowedImagesSettingsCommand extends $Command
  .classBuilder<
    GetAllowedImagesSettingsCommandInput,
    GetAllowedImagesSettingsCommandOutput,
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
  .s("AmazonEC2", "GetAllowedImagesSettings", {})
  .n("EC2Client", "GetAllowedImagesSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetAllowedImagesSettingsCommand)
  .de(de_GetAllowedImagesSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAllowedImagesSettingsRequest;
      output: GetAllowedImagesSettingsResult;
    };
    sdk: {
      input: GetAllowedImagesSettingsCommandInput;
      output: GetAllowedImagesSettingsCommandOutput;
    };
  };
}
