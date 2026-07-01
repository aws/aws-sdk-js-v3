// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ReplaceImageCriteriaInAllowedImagesSettingsRequest,
  ReplaceImageCriteriaInAllowedImagesSettingsResult,
} from "../models/models_7";
import { ReplaceImageCriteriaInAllowedImagesSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReplaceImageCriteriaInAllowedImagesSettingsCommand}.
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsCommandInput extends ReplaceImageCriteriaInAllowedImagesSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceImageCriteriaInAllowedImagesSettingsCommand}.
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput extends ReplaceImageCriteriaInAllowedImagesSettingsResult, __MetadataBearer {}

/**
 * <p>Sets or replaces the criteria for Allowed AMIs.</p>
 *          <p>The <code>ImageCriteria</code> can include up to:</p>
 *          <ul>
 *             <li>
 *                <p>10 <code>ImageCriterion</code>
 *                </p>
 *             </li>
 *          </ul>
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReplaceImageCriteriaInAllowedImagesSettingsRequest
 *   ImageCriteria: [ // ImageCriterionRequestList
 *     { // ImageCriterionRequest
 *       ImageProviders: [ // ImageProviderRequestList
 *         "STRING_VALUE",
 *       ],
 *       MarketplaceProductCodes: [ // MarketplaceProductCodeRequestList
 *         "STRING_VALUE",
 *       ],
 *       ImageNames: [ // ImageNameCriteriaRequestList
 *         "STRING_VALUE",
 *       ],
 *       DeprecationTimeCondition: { // DeprecationTimeConditionRequest
 *         MaximumDaysSinceDeprecated: Number("int"),
 *       },
 *       CreationDateCondition: { // CreationDateConditionRequest
 *         MaximumDaysSinceCreated: Number("int"),
 *       },
 *       ImageWatermarks: [ // ImageWatermarkFilterRequestList
 *         { // ImageWatermarkFilterRequest
 *           WatermarkKey: "STRING_VALUE",
 *           SourceImageRegion: "STRING_VALUE",
 *           MaximumDaysSinceSourceImageCreated: Number("int"),
 *           MaximumDaysSinceWatermarkCreated: Number("int"),
 *         },
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
export class ReplaceImageCriteriaInAllowedImagesSettingsCommand extends command<ReplaceImageCriteriaInAllowedImagesSettingsCommandInput, ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput>(
  _ep0,
  _mw0,
  "ReplaceImageCriteriaInAllowedImagesSettings",
  ReplaceImageCriteriaInAllowedImagesSettings$
) {
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
