// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { PutPlaybackConfigurationRequest, PutPlaybackConfigurationResponse } from "../models/models_0";
import { PutPlaybackConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPlaybackConfigurationCommand}.
 */
export interface PutPlaybackConfigurationCommandInput extends PutPlaybackConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutPlaybackConfigurationCommand}.
 */
export interface PutPlaybackConfigurationCommandOutput extends PutPlaybackConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // PutPlaybackConfigurationRequest
 *   AdDecisionServerUrl: "STRING_VALUE",
 *   AvailSuppression: { // AvailSuppression
 *     Mode: "OFF" || "BEHIND_LIVE_EDGE" || "AFTER_LIVE_EDGE",
 *     Value: "STRING_VALUE",
 *     FillPolicy: "FULL_AVAIL_ONLY" || "PARTIAL_AVAIL",
 *   },
 *   Bumper: { // Bumper
 *     EndUrl: "STRING_VALUE",
 *     StartUrl: "STRING_VALUE",
 *   },
 *   CdnConfiguration: { // CdnConfiguration
 *     AdSegmentUrlPrefix: "STRING_VALUE",
 *     ContentSegmentUrlPrefix: "STRING_VALUE",
 *   },
 *   ConfigurationAliases: { // ConfigurationAliasesRequest
 *     "<keys>": { // __mapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   DashConfiguration: { // DashConfigurationForPut
 *     MpdLocation: "STRING_VALUE",
 *     OriginManifestType: "SINGLE_PERIOD" || "MULTI_PERIOD",
 *   },
 *   InsertionMode: "STITCHED_ONLY" || "PLAYER_SELECT",
 *   LivePreRollConfiguration: { // LivePreRollConfiguration
 *     AdDecisionServerUrl: "STRING_VALUE",
 *     MaxDurationSeconds: Number("int"),
 *   },
 *   ManifestProcessingRules: { // ManifestProcessingRules
 *     AdMarkerPassthrough: { // AdMarkerPassthrough
 *       Enabled: true || false,
 *     },
 *   },
 *   Name: "STRING_VALUE", // required
 *   PersonalizationThresholdSeconds: Number("int"),
 *   SlateAdUrl: "STRING_VALUE",
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TranscodeProfileName: "STRING_VALUE",
 *   VideoContentSourceUrl: "STRING_VALUE",
 *   AdConditioningConfiguration: { // AdConditioningConfiguration
 *     StreamingMediaFileConditioning: "TRANSCODE" || "NONE", // required
 *   },
 * };
 * const command = new PutPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutPlaybackConfigurationResponse
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
 * //     EnabledLoggingStrategies: [ // __listOfLoggingStrategies // required
 * //       "VENDED_LOGS" || "LEGACY_CLOUDWATCH",
 * //     ],
 * //     AdsInteractionLog: { // AdsInteractionLog
 * //       PublishOptInEventTypes: [ // __adsInteractionPublishOptInEventTypesList
 * //         "RAW_ADS_RESPONSE",
 * //       ],
 * //       ExcludeEventTypes: [ // __adsInteractionExcludeEventTypesList
 * //         "AD_MARKER_FOUND" || "NON_AD_MARKER_FOUND" || "MAKING_ADS_REQUEST" || "MODIFIED_TARGET_URL" || "VAST_REDIRECT" || "EMPTY_VAST_RESPONSE" || "EMPTY_VMAP_RESPONSE" || "VAST_RESPONSE" || "REDIRECTED_VAST_RESPONSE" || "FILLED_AVAIL" || "FILLED_OVERLAY_AVAIL" || "BEACON_FIRED" || "WARNING_NO_ADVERTISEMENTS" || "WARNING_VPAID_AD_DROPPED" || "WARNING_URL_VARIABLE_SUBSTITUTION_FAILED" || "ERROR_UNKNOWN" || "ERROR_UNKNOWN_HOST" || "ERROR_DISALLOWED_HOST" || "ERROR_ADS_IO" || "ERROR_ADS_TIMEOUT" || "ERROR_ADS_RESPONSE_PARSE" || "ERROR_ADS_RESPONSE_UNKNOWN_ROOT_ELEMENT" || "ERROR_ADS_INVALID_RESPONSE" || "ERROR_VAST_REDIRECT_EMPTY_RESPONSE" || "ERROR_VAST_REDIRECT_MULTIPLE_VAST" || "ERROR_VAST_REDIRECT_FAILED" || "ERROR_VAST_MISSING_MEDIAFILES" || "ERROR_VAST_MISSING_CREATIVES" || "ERROR_VAST_MISSING_OVERLAYS" || "ERROR_VAST_MISSING_IMPRESSION" || "ERROR_VAST_INVALID_VAST_AD_TAG_URI" || "ERROR_VAST_MULTIPLE_TRACKING_EVENTS" || "ERROR_VAST_MULTIPLE_LINEAR" || "ERROR_VAST_INVALID_MEDIA_FILE" || "ERROR_FIRING_BEACON_FAILED" || "ERROR_PERSONALIZATION_DISABLED" || "VOD_TIME_BASED_AVAIL_PLAN_VAST_RESPONSE_FOR_OFFSET" || "VOD_TIME_BASED_AVAIL_PLAN_SUCCESS" || "VOD_TIME_BASED_AVAIL_PLAN_WARNING_NO_ADVERTISEMENTS" || "INTERSTITIAL_VOD_SUCCESS" || "INTERSTITIAL_VOD_FAILURE",
 * //       ],
 * //     },
 * //     ManifestServiceInteractionLog: { // ManifestServiceInteractionLog
 * //       ExcludeEventTypes: [ // __manifestServiceExcludeEventTypesList
 * //         "GENERATED_MANIFEST" || "ORIGIN_MANIFEST" || "SESSION_INITIALIZED" || "TRACKING_RESPONSE" || "CONFIG_SYNTAX_ERROR" || "CONFIG_SECURITY_ERROR" || "UNKNOWN_HOST" || "TIMEOUT_ERROR" || "CONNECTION_ERROR" || "IO_ERROR" || "UNKNOWN_ERROR" || "HOST_DISALLOWED" || "PARSING_ERROR" || "MANIFEST_ERROR" || "NO_MASTER_OR_MEDIA_PLAYLIST" || "NO_MASTER_PLAYLIST" || "NO_MEDIA_PLAYLIST" || "INCOMPATIBLE_HLS_VERSION" || "SCTE35_PARSING_ERROR" || "INVALID_SINGLE_PERIOD_DASH_MANIFEST" || "UNSUPPORTED_SINGLE_PERIOD_DASH_MANIFEST" || "LAST_PERIOD_MISSING_AUDIO" || "LAST_PERIOD_MISSING_AUDIO_WARNING" || "ERROR_ORIGIN_PREFIX_INTERPOLATION" || "ERROR_ADS_INTERPOLATION" || "ERROR_LIVE_PRE_ROLL_ADS_INTERPOLATION" || "ERROR_CDN_AD_SEGMENT_INTERPOLATION" || "ERROR_CDN_CONTENT_SEGMENT_INTERPOLATION" || "ERROR_SLATE_AD_URL_INTERPOLATION" || "ERROR_PROFILE_NAME_INTERPOLATION" || "ERROR_BUMPER_START_INTERPOLATION" || "ERROR_BUMPER_END_INTERPOLATION",
 * //       ],
 * //     },
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
 * @param PutPlaybackConfigurationCommandInput - {@link PutPlaybackConfigurationCommandInput}
 * @returns {@link PutPlaybackConfigurationCommandOutput}
 * @see {@link PutPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class PutPlaybackConfigurationCommand extends $Command
  .classBuilder<
    PutPlaybackConfigurationCommandInput,
    PutPlaybackConfigurationCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "PutPlaybackConfiguration", {})
  .n("MediaTailorClient", "PutPlaybackConfigurationCommand")
  .sc(PutPlaybackConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPlaybackConfigurationRequest;
      output: PutPlaybackConfigurationResponse;
    };
    sdk: {
      input: PutPlaybackConfigurationCommandInput;
      output: PutPlaybackConfigurationCommandOutput;
    };
  };
}
