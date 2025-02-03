// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListPlaybackConfigurationsRequest, ListPlaybackConfigurationsResponse } from "../models/models_0";
import { de_ListPlaybackConfigurationsCommand, se_ListPlaybackConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlaybackConfigurationsCommand}.
 */
export interface ListPlaybackConfigurationsCommandInput extends ListPlaybackConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlaybackConfigurationsCommand}.
 */
export interface ListPlaybackConfigurationsCommandOutput extends ListPlaybackConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves existing playback configurations. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with Configurations in AWS Elemental MediaTailor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPlaybackConfigurationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPlaybackConfigurationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListPlaybackConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlaybackConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlaybackConfigurationsResponse
 * //   Items: [ // __listOfPlaybackConfiguration
 * //     { // PlaybackConfiguration
 * //       AdDecisionServerUrl: "STRING_VALUE",
 * //       AvailSuppression: { // AvailSuppression
 * //         Mode: "OFF" || "BEHIND_LIVE_EDGE" || "AFTER_LIVE_EDGE",
 * //         Value: "STRING_VALUE",
 * //         FillPolicy: "FULL_AVAIL_ONLY" || "PARTIAL_AVAIL",
 * //       },
 * //       Bumper: { // Bumper
 * //         EndUrl: "STRING_VALUE",
 * //         StartUrl: "STRING_VALUE",
 * //       },
 * //       CdnConfiguration: { // CdnConfiguration
 * //         AdSegmentUrlPrefix: "STRING_VALUE",
 * //         ContentSegmentUrlPrefix: "STRING_VALUE",
 * //       },
 * //       ConfigurationAliases: { // ConfigurationAliasesResponse
 * //         "<keys>": { // __mapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       DashConfiguration: { // DashConfiguration
 * //         ManifestEndpointPrefix: "STRING_VALUE",
 * //         MpdLocation: "STRING_VALUE",
 * //         OriginManifestType: "SINGLE_PERIOD" || "MULTI_PERIOD",
 * //       },
 * //       HlsConfiguration: { // HlsConfiguration
 * //         ManifestEndpointPrefix: "STRING_VALUE",
 * //       },
 * //       InsertionMode: "STITCHED_ONLY" || "PLAYER_SELECT",
 * //       LivePreRollConfiguration: { // LivePreRollConfiguration
 * //         AdDecisionServerUrl: "STRING_VALUE",
 * //         MaxDurationSeconds: Number("int"),
 * //       },
 * //       LogConfiguration: { // LogConfiguration
 * //         PercentEnabled: Number("int"), // required
 * //         EnabledLoggingStrategies: [ // __listOfLoggingStrategies
 * //           "VENDED_LOGS" || "LEGACY_CLOUDWATCH",
 * //         ],
 * //       },
 * //       ManifestProcessingRules: { // ManifestProcessingRules
 * //         AdMarkerPassthrough: { // AdMarkerPassthrough
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       Name: "STRING_VALUE",
 * //       PersonalizationThresholdSeconds: Number("int"),
 * //       PlaybackConfigurationArn: "STRING_VALUE",
 * //       PlaybackEndpointPrefix: "STRING_VALUE",
 * //       SessionInitializationEndpointPrefix: "STRING_VALUE",
 * //       SlateAdUrl: "STRING_VALUE",
 * //       Tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TranscodeProfileName: "STRING_VALUE",
 * //       VideoContentSourceUrl: "STRING_VALUE",
 * //       AdConditioningConfiguration: { // AdConditioningConfiguration
 * //         StreamingMediaFileConditioning: "TRANSCODE" || "NONE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlaybackConfigurationsCommandInput - {@link ListPlaybackConfigurationsCommandInput}
 * @returns {@link ListPlaybackConfigurationsCommandOutput}
 * @see {@link ListPlaybackConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPlaybackConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class ListPlaybackConfigurationsCommand extends $Command
  .classBuilder<
    ListPlaybackConfigurationsCommandInput,
    ListPlaybackConfigurationsCommandOutput,
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
  .s("MediaTailor", "ListPlaybackConfigurations", {})
  .n("MediaTailorClient", "ListPlaybackConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListPlaybackConfigurationsCommand)
  .de(de_ListPlaybackConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlaybackConfigurationsRequest;
      output: ListPlaybackConfigurationsResponse;
    };
    sdk: {
      input: ListPlaybackConfigurationsCommandInput;
      output: ListPlaybackConfigurationsCommandOutput;
    };
  };
}
