// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getTranscribeStreamingPlugin } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StartCallAnalyticsStreamTranscriptionRequest,
  StartCallAnalyticsStreamTranscriptionResponse,
} from "../models/models_0";
import { StartCallAnalyticsStreamTranscription } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig,
} from "../TranscribeStreamingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCallAnalyticsStreamTranscriptionCommand}.
 */
export interface StartCallAnalyticsStreamTranscriptionCommandInput
  extends StartCallAnalyticsStreamTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartCallAnalyticsStreamTranscriptionCommand}.
 */
export interface StartCallAnalyticsStreamTranscriptionCommandOutput
  extends StartCallAnalyticsStreamTranscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 *       Amazon Transcribe and the transcription results are streamed to your application. Use this operation
 *       for <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Call Analytics</a> transcriptions.</p>
 *          <p>The following parameters are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>language-code</code> or <code>identify-language</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>media-encoding</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>sample-rate</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information on streaming with Amazon Transcribe, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartCallAnalyticsStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartCallAnalyticsStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * // import type { TranscribeStreamingClientConfig } from "@aws-sdk/client-transcribe-streaming";
 * const config = {}; // type is TranscribeStreamingClientConfig
 * const client = new TranscribeStreamingClient(config);
 * const input = { // StartCallAnalyticsStreamTranscriptionRequest
 *   LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 *   MediaSampleRateHertz: Number("int"), // required
 *   MediaEncoding: "pcm" || "ogg-opus" || "flac", // required
 *   VocabularyName: "STRING_VALUE",
 *   SessionId: "STRING_VALUE",
 *   AudioStream: { // AudioStream Union: only one key present
 *     AudioEvent: { // AudioEvent
 *       AudioChunk: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     },
 *     ConfigurationEvent: { // ConfigurationEvent
 *       ChannelDefinitions: [ // ChannelDefinitions
 *         { // ChannelDefinition
 *           ChannelId: Number("int"), // required
 *           ParticipantRole: "AGENT" || "CUSTOMER", // required
 *         },
 *       ],
 *       PostCallAnalyticsSettings: { // PostCallAnalyticsSettings
 *         OutputLocation: "STRING_VALUE", // required
 *         DataAccessRoleArn: "STRING_VALUE", // required
 *         ContentRedactionOutput: "redacted" || "redacted_and_unredacted",
 *         OutputEncryptionKMSKeyId: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   VocabularyFilterName: "STRING_VALUE",
 *   VocabularyFilterMethod: "remove" || "mask" || "tag",
 *   LanguageModelName: "STRING_VALUE",
 *   IdentifyLanguage: true || false,
 *   LanguageOptions: "STRING_VALUE",
 *   PreferredLanguage: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 *   VocabularyNames: "STRING_VALUE",
 *   VocabularyFilterNames: "STRING_VALUE",
 *   EnablePartialResultsStabilization: true || false,
 *   PartialResultsStability: "high" || "medium" || "low",
 *   ContentIdentificationType: "PII",
 *   ContentRedactionType: "PII",
 *   PiiEntityTypes: "STRING_VALUE",
 * };
 * const command = new StartCallAnalyticsStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * // { // StartCallAnalyticsStreamTranscriptionResponse
 * //   RequestId: "STRING_VALUE",
 * //   LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //   MediaSampleRateHertz: Number("int"),
 * //   MediaEncoding: "pcm" || "ogg-opus" || "flac",
 * //   VocabularyName: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   CallAnalyticsTranscriptResultStream: { // CallAnalyticsTranscriptResultStream Union: only one key present
 * //     UtteranceEvent: { // UtteranceEvent
 * //       UtteranceId: "STRING_VALUE",
 * //       IsPartial: true || false,
 * //       ParticipantRole: "AGENT" || "CUSTOMER",
 * //       BeginOffsetMillis: Number("long"),
 * //       EndOffsetMillis: Number("long"),
 * //       Transcript: "STRING_VALUE",
 * //       Items: [ // CallAnalyticsItemList
 * //         { // CallAnalyticsItem
 * //           BeginOffsetMillis: Number("long"),
 * //           EndOffsetMillis: Number("long"),
 * //           Type: "pronunciation" || "punctuation",
 * //           Content: "STRING_VALUE",
 * //           Confidence: Number("double"),
 * //           VocabularyFilterMatch: true || false,
 * //           Stable: true || false,
 * //         },
 * //       ],
 * //       Entities: [ // CallAnalyticsEntityList
 * //         { // CallAnalyticsEntity
 * //           BeginOffsetMillis: Number("long"),
 * //           EndOffsetMillis: Number("long"),
 * //           Category: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           Content: "STRING_VALUE",
 * //           Confidence: Number("double"),
 * //         },
 * //       ],
 * //       Sentiment: "POSITIVE" || "NEGATIVE" || "MIXED" || "NEUTRAL",
 * //       IssuesDetected: [ // IssuesDetected
 * //         { // IssueDetected
 * //           CharacterOffsets: { // CharacterOffsets
 * //             Begin: Number("int"),
 * //             End: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //       LanguageIdentification: [ // CallAnalyticsLanguageIdentification
 * //         { // CallAnalyticsLanguageWithScore
 * //           LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //           Score: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //     CategoryEvent: { // CategoryEvent
 * //       MatchedCategories: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       MatchedDetails: { // MatchedCategoryDetails
 * //         "<keys>": { // PointsOfInterest
 * //           TimestampRanges: [ // TimestampRanges
 * //             { // TimestampRange
 * //               BeginOffsetMillis: Number("long"),
 * //               EndOffsetMillis: Number("long"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     BadRequestException: { // BadRequestException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     LimitExceededException: { // LimitExceededException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     InternalFailureException: { // InternalFailureException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ConflictException: { // ConflictException
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ServiceUnavailableException: { // ServiceUnavailableException
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   VocabularyFilterName: "STRING_VALUE",
 * //   VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //   LanguageModelName: "STRING_VALUE",
 * //   IdentifyLanguage: true || false,
 * //   LanguageOptions: "STRING_VALUE",
 * //   PreferredLanguage: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //   VocabularyNames: "STRING_VALUE",
 * //   VocabularyFilterNames: "STRING_VALUE",
 * //   EnablePartialResultsStabilization: true || false,
 * //   PartialResultsStability: "high" || "medium" || "low",
 * //   ContentIdentificationType: "PII",
 * //   ContentRedactionType: "PII",
 * //   PiiEntityTypes: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartCallAnalyticsStreamTranscriptionCommandInput - {@link StartCallAnalyticsStreamTranscriptionCommandInput}
 * @returns {@link StartCallAnalyticsStreamTranscriptionCommandOutput}
 * @see {@link StartCallAnalyticsStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartCallAnalyticsStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for TranscribeStreamingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One or more arguments to the <code>StartStreamTranscription</code>,
 *       <code>StartMedicalStreamTranscription</code>, or <code>StartCallAnalyticsStreamTranscription</code>
 *       operation was not valid. For example, <code>MediaEncoding</code> or <code>LanguageCode</code>
 *       used unsupported values. Check the specified parameters and try your request again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A new stream started with the same session ID. The current stream has been terminated.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>A problem occurred while processing the audio. Amazon Transcribe terminated
 *       processing.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
 *       limit. Break your audio stream into smaller chunks and try your request again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable. Try your request later.</p>
 *
 * @throws {@link TranscribeStreamingServiceException}
 * <p>Base exception class for all service exceptions from TranscribeStreaming service.</p>
 *
 *
 * @public
 */
export class StartCallAnalyticsStreamTranscriptionCommand extends $Command
  .classBuilder<
    StartCallAnalyticsStreamTranscriptionCommandInput,
    StartCallAnalyticsStreamTranscriptionCommandOutput,
    TranscribeStreamingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeStreamingClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
      getWebSocketPlugin(config, {
        headerPrefix: "x-amzn-transcribe-",
      }),
      getTranscribeStreamingPlugin(config),
    ];
  })
  .s("Transcribe", "StartCallAnalyticsStreamTranscription", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("TranscribeStreamingClient", "StartCallAnalyticsStreamTranscriptionCommand")
  .sc(StartCallAnalyticsStreamTranscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCallAnalyticsStreamTranscriptionRequest;
      output: StartCallAnalyticsStreamTranscriptionResponse;
    };
    sdk: {
      input: StartCallAnalyticsStreamTranscriptionCommandInput;
      output: StartCallAnalyticsStreamTranscriptionCommandOutput;
    };
  };
}
