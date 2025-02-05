// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { GetPlaybackConfigurationRequest, GetPlaybackConfigurationResponse } from "../models/models_0";
import { de_GetPlaybackConfigurationCommand, se_GetPlaybackConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPlaybackConfigurationCommand}.
 */
export interface GetPlaybackConfigurationCommandInput extends GetPlaybackConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetPlaybackConfigurationCommand}.
 */
export interface GetPlaybackConfigurationCommandOutput extends GetPlaybackConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaTailorClient(config);
 * const input = { // GetPlaybackConfigurationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetPlaybackConfigurationResponse
 * //   AdDecisionServerUrl: "STRING_VALUE",
 * //   AvailSuppression: { // AvailSuppression
 * //     Mode: "OFF" || "BEHIND_LIVE_EDGE" || "AFTER_LIVE_EDGE",
 * //     Value: "STRING_VALUE",
 * //     FillPolicy: "FULL_AVAIL_ONLY" || "PARTIAL_AVAIL",
 * //   },
 * //   Bumper: { // Bumper
 * //     EndUrl: "STRING_VALUE",
 * //     StartUrl: "STRING_VALUE",
 * //   },
 * //   CdnConfiguration: { // CdnConfiguration
 * //     AdSegmentUrlPrefix: "STRING_VALUE",
 * //     ContentSegmentUrlPrefix: "STRING_VALUE",
 * //   },
 * //   ConfigurationAliases: { // ConfigurationAliasesResponse
 * //     "<keys>": { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DashConfiguration: { // DashConfiguration
 * //     ManifestEndpointPrefix: "STRING_VALUE",
 * //     MpdLocation: "STRING_VALUE",
 * //     OriginManifestType: "SINGLE_PERIOD" || "MULTI_PERIOD",
 * //   },
 * //   HlsConfiguration: { // HlsConfiguration
 * //     ManifestEndpointPrefix: "STRING_VALUE",
 * //   },
 * //   InsertionMode: "STITCHED_ONLY" || "PLAYER_SELECT",
 * //   LivePreRollConfiguration: { // LivePreRollConfiguration
 * //     AdDecisionServerUrl: "STRING_VALUE",
 * //     MaxDurationSeconds: Number("int"),
 * //   },
 * //   LogConfiguration: { // LogConfiguration
 * //     PercentEnabled: Number("int"), // required
 * //     EnabledLoggingStrategies: [ // __listOfLoggingStrategies
 * //       "VENDED_LOGS" || "LEGACY_CLOUDWATCH",
 * //     ],
 * //   },
 * //   ManifestProcessingRules: { // ManifestProcessingRules
 * //     AdMarkerPassthrough: { // AdMarkerPassthrough
 * //       Enabled: true || false,
 * //     },
 * //   },
 * //   Name: "STRING_VALUE",
 * //   PersonalizationThresholdSeconds: Number("int"),
 * //   PlaybackConfigurationArn: "STRING_VALUE",
 * //   PlaybackEndpointPrefix: "STRING_VALUE",
 * //   SessionInitializationEndpointPrefix: "STRING_VALUE",
 * //   SlateAdUrl: "STRING_VALUE",
 * //   Tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TranscodeProfileName: "STRING_VALUE",
 * //   VideoContentSourceUrl: "STRING_VALUE",
 * //   AdConditioningConfiguration: { // AdConditioningConfiguration
 * //     StreamingMediaFileConditioning: "TRANSCODE" || "NONE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlaybackConfigurationCommandInput - {@link GetPlaybackConfigurationCommandInput}
 * @returns {@link GetPlaybackConfigurationCommandOutput}
 * @see {@link GetPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class GetPlaybackConfigurationCommand extends $Command
  .classBuilder<
    GetPlaybackConfigurationCommandInput,
    GetPlaybackConfigurationCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "GetPlaybackConfiguration", {})
  .n("MediaTailorClient", "GetPlaybackConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetPlaybackConfigurationCommand)
  .de(de_GetPlaybackConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlaybackConfigurationRequest;
      output: GetPlaybackConfigurationResponse;
    };
    sdk: {
      input: GetPlaybackConfigurationCommandInput;
      output: GetPlaybackConfigurationCommandOutput;
    };
  };
}
