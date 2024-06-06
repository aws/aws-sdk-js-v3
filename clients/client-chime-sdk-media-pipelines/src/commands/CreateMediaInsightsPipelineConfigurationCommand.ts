// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMediaInsightsPipelineConfigurationRequest,
  CreateMediaInsightsPipelineConfigurationRequestFilterSensitiveLog,
  CreateMediaInsightsPipelineConfigurationResponse,
  CreateMediaInsightsPipelineConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateMediaInsightsPipelineConfigurationCommand,
  se_CreateMediaInsightsPipelineConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaInsightsPipelineConfigurationCommand}.
 */
export interface CreateMediaInsightsPipelineConfigurationCommandInput
  extends CreateMediaInsightsPipelineConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaInsightsPipelineConfigurationCommand}.
 */
export interface CreateMediaInsightsPipelineConfigurationCommandOutput
  extends CreateMediaInsightsPipelineConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>A structure that contains the static configurations for a media insights
 *          pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaInsightsPipelineConfigurationCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaInsightsPipelineConfigurationCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaInsightsPipelineConfigurationRequest
 *   MediaInsightsPipelineConfigurationName: "STRING_VALUE", // required
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateMediaInsightsPipelineConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaInsightsPipelineConfigurationResponse
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
 * @param CreateMediaInsightsPipelineConfigurationCommandInput - {@link CreateMediaInsightsPipelineConfigurationCommandInput}
 * @returns {@link CreateMediaInsightsPipelineConfigurationCommandOutput}
 * @see {@link CreateMediaInsightsPipelineConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateMediaInsightsPipelineConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
 * @public
 */
export class CreateMediaInsightsPipelineConfigurationCommand extends $Command
  .classBuilder<
    CreateMediaInsightsPipelineConfigurationCommandInput,
    CreateMediaInsightsPipelineConfigurationCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKMediaPipelinesService", "CreateMediaInsightsPipelineConfiguration", {})
  .n("ChimeSDKMediaPipelinesClient", "CreateMediaInsightsPipelineConfigurationCommand")
  .f(
    CreateMediaInsightsPipelineConfigurationRequestFilterSensitiveLog,
    CreateMediaInsightsPipelineConfigurationResponseFilterSensitiveLog
  )
  .ser(se_CreateMediaInsightsPipelineConfigurationCommand)
  .de(de_CreateMediaInsightsPipelineConfigurationCommand)
  .build() {}
