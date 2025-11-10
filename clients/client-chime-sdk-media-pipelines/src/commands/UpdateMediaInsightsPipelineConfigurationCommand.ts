// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateMediaInsightsPipelineConfigurationRequest,
  UpdateMediaInsightsPipelineConfigurationResponse,
} from "../models/models_0";
import { UpdateMediaInsightsPipelineConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMediaInsightsPipelineConfigurationCommand}.
 */
export interface UpdateMediaInsightsPipelineConfigurationCommandInput
  extends UpdateMediaInsightsPipelineConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMediaInsightsPipelineConfigurationCommand}.
 */
export interface UpdateMediaInsightsPipelineConfigurationCommandOutput
  extends UpdateMediaInsightsPipelineConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the media insights pipeline's configuration settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, UpdateMediaInsightsPipelineConfigurationCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, UpdateMediaInsightsPipelineConfigurationCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // UpdateMediaInsightsPipelineConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 *   ResourceAccessRoleArn: "STRING_VALUE", // required
 *   RealTimeAlertConfiguration: { // RealTimeAlertConfiguration
 *     Disabled: true || false,
 *     Rules: [ // RealTimeAlertRuleList
 *       { // RealTimeAlertRule
 *         Type: "KeywordMatch" || "Sentiment" || "IssueDetection", // required
 *         KeywordMatchConfiguration: { // KeywordMatchConfiguration
 *           RuleName: "STRING_VALUE", // required
 *           Keywords: [ // KeywordMatchWordList // required
 *             "STRING_VALUE",
 *           ],
 *           Negate: true || false,
 *         },
 *         SentimentConfiguration: { // SentimentConfiguration
 *           RuleName: "STRING_VALUE", // required
 *           SentimentType: "NEGATIVE", // required
 *           TimePeriod: Number("int"), // required
 *         },
 *         IssueDetectionConfiguration: { // IssueDetectionConfiguration
 *           RuleName: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *   },
 *   Elements: [ // MediaInsightsPipelineConfigurationElements // required
 *     { // MediaInsightsPipelineConfigurationElement
 *       Type: "AmazonTranscribeCallAnalyticsProcessor" || "VoiceAnalyticsProcessor" || "AmazonTranscribeProcessor" || "KinesisDataStreamSink" || "LambdaFunctionSink" || "SqsQueueSink" || "SnsTopicSink" || "S3RecordingSink" || "VoiceEnhancementSink", // required
 *       AmazonTranscribeCallAnalyticsProcessorConfiguration: { // AmazonTranscribeCallAnalyticsProcessorConfiguration
 *         LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR", // required
 *         VocabularyName: "STRING_VALUE",
 *         VocabularyFilterName: "STRING_VALUE",
 *         VocabularyFilterMethod: "remove" || "mask" || "tag",
 *         LanguageModelName: "STRING_VALUE",
 *         EnablePartialResultsStabilization: true || false,
 *         PartialResultsStability: "high" || "medium" || "low",
 *         ContentIdentificationType: "PII",
 *         ContentRedactionType: "PII",
 *         PiiEntityTypes: "STRING_VALUE",
 *         FilterPartialResults: true || false,
 *         PostCallAnalyticsSettings: { // PostCallAnalyticsSettings
 *           OutputLocation: "STRING_VALUE", // required
 *           DataAccessRoleArn: "STRING_VALUE", // required
 *           ContentRedactionOutput: "redacted" || "redacted_and_unredacted",
 *           OutputEncryptionKMSKeyId: "STRING_VALUE",
 *         },
 *         CallAnalyticsStreamCategories: [ // CategoryNameList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AmazonTranscribeProcessorConfiguration: { // AmazonTranscribeProcessorConfiguration
 *         LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 *         VocabularyName: "STRING_VALUE",
 *         VocabularyFilterName: "STRING_VALUE",
 *         VocabularyFilterMethod: "remove" || "mask" || "tag",
 *         ShowSpeakerLabel: true || false,
 *         EnablePartialResultsStabilization: true || false,
 *         PartialResultsStability: "high" || "medium" || "low",
 *         ContentIdentificationType: "PII",
 *         ContentRedactionType: "PII",
 *         PiiEntityTypes: "STRING_VALUE",
 *         LanguageModelName: "STRING_VALUE",
 *         FilterPartialResults: true || false,
 *         IdentifyLanguage: true || false,
 *         IdentifyMultipleLanguages: true || false,
 *         LanguageOptions: "STRING_VALUE",
 *         PreferredLanguage: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 *         VocabularyNames: "STRING_VALUE",
 *         VocabularyFilterNames: "STRING_VALUE",
 *       },
 *       KinesisDataStreamSinkConfiguration: { // KinesisDataStreamSinkConfiguration
 *         InsightsTarget: "STRING_VALUE",
 *       },
 *       S3RecordingSinkConfiguration: { // S3RecordingSinkConfiguration
 *         Destination: "STRING_VALUE",
 *         RecordingFileFormat: "Wav" || "Opus",
 *       },
 *       VoiceAnalyticsProcessorConfiguration: { // VoiceAnalyticsProcessorConfiguration
 *         SpeakerSearchStatus: "Enabled" || "Disabled",
 *         VoiceToneAnalysisStatus: "Enabled" || "Disabled",
 *       },
 *       LambdaFunctionSinkConfiguration: { // LambdaFunctionSinkConfiguration
 *         InsightsTarget: "STRING_VALUE",
 *       },
 *       SqsQueueSinkConfiguration: { // SqsQueueSinkConfiguration
 *         InsightsTarget: "STRING_VALUE",
 *       },
 *       SnsTopicSinkConfiguration: { // SnsTopicSinkConfiguration
 *         InsightsTarget: "STRING_VALUE",
 *       },
 *       VoiceEnhancementSinkConfiguration: { // VoiceEnhancementSinkConfiguration
 *         Disabled: true || false,
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateMediaInsightsPipelineConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMediaInsightsPipelineConfigurationResponse
 * //   MediaInsightsPipelineConfiguration: { // MediaInsightsPipelineConfiguration
 * //     MediaInsightsPipelineConfigurationName: "STRING_VALUE",
 * //     MediaInsightsPipelineConfigurationArn: "STRING_VALUE",
 * //     ResourceAccessRoleArn: "STRING_VALUE",
 * //     RealTimeAlertConfiguration: { // RealTimeAlertConfiguration
 * //       Disabled: true || false,
 * //       Rules: [ // RealTimeAlertRuleList
 * //         { // RealTimeAlertRule
 * //           Type: "KeywordMatch" || "Sentiment" || "IssueDetection", // required
 * //           KeywordMatchConfiguration: { // KeywordMatchConfiguration
 * //             RuleName: "STRING_VALUE", // required
 * //             Keywords: [ // KeywordMatchWordList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Negate: true || false,
 * //           },
 * //           SentimentConfiguration: { // SentimentConfiguration
 * //             RuleName: "STRING_VALUE", // required
 * //             SentimentType: "NEGATIVE", // required
 * //             TimePeriod: Number("int"), // required
 * //           },
 * //           IssueDetectionConfiguration: { // IssueDetectionConfiguration
 * //             RuleName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     Elements: [ // MediaInsightsPipelineConfigurationElements
 * //       { // MediaInsightsPipelineConfigurationElement
 * //         Type: "AmazonTranscribeCallAnalyticsProcessor" || "VoiceAnalyticsProcessor" || "AmazonTranscribeProcessor" || "KinesisDataStreamSink" || "LambdaFunctionSink" || "SqsQueueSink" || "SnsTopicSink" || "S3RecordingSink" || "VoiceEnhancementSink", // required
 * //         AmazonTranscribeCallAnalyticsProcessorConfiguration: { // AmazonTranscribeCallAnalyticsProcessorConfiguration
 * //           LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR", // required
 * //           VocabularyName: "STRING_VALUE",
 * //           VocabularyFilterName: "STRING_VALUE",
 * //           VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //           LanguageModelName: "STRING_VALUE",
 * //           EnablePartialResultsStabilization: true || false,
 * //           PartialResultsStability: "high" || "medium" || "low",
 * //           ContentIdentificationType: "PII",
 * //           ContentRedactionType: "PII",
 * //           PiiEntityTypes: "STRING_VALUE",
 * //           FilterPartialResults: true || false,
 * //           PostCallAnalyticsSettings: { // PostCallAnalyticsSettings
 * //             OutputLocation: "STRING_VALUE", // required
 * //             DataAccessRoleArn: "STRING_VALUE", // required
 * //             ContentRedactionOutput: "redacted" || "redacted_and_unredacted",
 * //             OutputEncryptionKMSKeyId: "STRING_VALUE",
 * //           },
 * //           CallAnalyticsStreamCategories: [ // CategoryNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         AmazonTranscribeProcessorConfiguration: { // AmazonTranscribeProcessorConfiguration
 * //           LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //           VocabularyName: "STRING_VALUE",
 * //           VocabularyFilterName: "STRING_VALUE",
 * //           VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //           ShowSpeakerLabel: true || false,
 * //           EnablePartialResultsStabilization: true || false,
 * //           PartialResultsStability: "high" || "medium" || "low",
 * //           ContentIdentificationType: "PII",
 * //           ContentRedactionType: "PII",
 * //           PiiEntityTypes: "STRING_VALUE",
 * //           LanguageModelName: "STRING_VALUE",
 * //           FilterPartialResults: true || false,
 * //           IdentifyLanguage: true || false,
 * //           IdentifyMultipleLanguages: true || false,
 * //           LanguageOptions: "STRING_VALUE",
 * //           PreferredLanguage: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //           VocabularyNames: "STRING_VALUE",
 * //           VocabularyFilterNames: "STRING_VALUE",
 * //         },
 * //         KinesisDataStreamSinkConfiguration: { // KinesisDataStreamSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //         S3RecordingSinkConfiguration: { // S3RecordingSinkConfiguration
 * //           Destination: "STRING_VALUE",
 * //           RecordingFileFormat: "Wav" || "Opus",
 * //         },
 * //         VoiceAnalyticsProcessorConfiguration: { // VoiceAnalyticsProcessorConfiguration
 * //           SpeakerSearchStatus: "Enabled" || "Disabled",
 * //           VoiceToneAnalysisStatus: "Enabled" || "Disabled",
 * //         },
 * //         LambdaFunctionSinkConfiguration: { // LambdaFunctionSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //         SqsQueueSinkConfiguration: { // SqsQueueSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //         SnsTopicSinkConfiguration: { // SnsTopicSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //         VoiceEnhancementSinkConfiguration: { // VoiceEnhancementSinkConfiguration
 * //           Disabled: true || false,
 * //         },
 * //       },
 * //     ],
 * //     MediaInsightsPipelineConfigurationId: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMediaInsightsPipelineConfigurationCommandInput - {@link UpdateMediaInsightsPipelineConfigurationCommandInput}
 * @returns {@link UpdateMediaInsightsPipelineConfigurationCommandOutput}
 * @see {@link UpdateMediaInsightsPipelineConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateMediaInsightsPipelineConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 *
 * @public
 */
export class UpdateMediaInsightsPipelineConfigurationCommand extends $Command
  .classBuilder<
    UpdateMediaInsightsPipelineConfigurationCommandInput,
    UpdateMediaInsightsPipelineConfigurationCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "UpdateMediaInsightsPipelineConfiguration", {})
  .n("ChimeSDKMediaPipelinesClient", "UpdateMediaInsightsPipelineConfigurationCommand")
  .sc(UpdateMediaInsightsPipelineConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMediaInsightsPipelineConfigurationRequest;
      output: UpdateMediaInsightsPipelineConfigurationResponse;
    };
    sdk: {
      input: UpdateMediaInsightsPipelineConfigurationCommandInput;
      output: UpdateMediaInsightsPipelineConfigurationCommandOutput;
    };
  };
}
