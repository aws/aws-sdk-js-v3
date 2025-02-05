// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getTranscribeStreamingPlugin } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartMedicalStreamTranscriptionRequest,
  StartMedicalStreamTranscriptionRequestFilterSensitiveLog,
  StartMedicalStreamTranscriptionResponse,
  StartMedicalStreamTranscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StartMedicalStreamTranscriptionCommand,
  se_StartMedicalStreamTranscriptionCommand,
} from "../protocols/Aws_restJson1";
import {
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
 * The input for {@link StartMedicalStreamTranscriptionCommand}.
 */
export interface StartMedicalStreamTranscriptionCommandInput extends StartMedicalStreamTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartMedicalStreamTranscriptionCommand}.
 */
export interface StartMedicalStreamTranscriptionCommandOutput
  extends StartMedicalStreamTranscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 *             Amazon Transcribe Medical and the transcription results are streamed to your
 *             application.</p>
 *          <p>The following parameters are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>language-code</code>
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
 *          <p>For more information on streaming with Amazon Transcribe Medical, see
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing
 *                 streaming audio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TranscribeStreamingClient(config);
 * const input = { // StartMedicalStreamTranscriptionRequest
 *   LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR" || "ja-JP" || "ko-KR" || "zh-CN" || "th-TH" || "es-ES" || "ar-SA" || "pt-PT" || "ca-ES" || "ar-AE" || "hi-IN" || "zh-HK" || "nl-NL" || "no-NO" || "sv-SE" || "pl-PL" || "fi-FI" || "zh-TW" || "en-IN" || "en-IE" || "en-NZ" || "en-AB" || "en-ZA" || "en-WL" || "de-CH" || "af-ZA" || "eu-ES" || "hr-HR" || "cs-CZ" || "da-DK" || "fa-IR" || "gl-ES" || "el-GR" || "he-IL" || "id-ID" || "lv-LV" || "ms-MY" || "ro-RO" || "ru-RU" || "sr-RS" || "sk-SK" || "so-SO" || "tl-PH" || "uk-UA" || "vi-VN" || "zu-ZA", // required
 *   MediaSampleRateHertz: Number("int"), // required
 *   MediaEncoding: "pcm" || "ogg-opus" || "flac", // required
 *   VocabularyName: "STRING_VALUE",
 *   Specialty: "PRIMARYCARE" || "CARDIOLOGY" || "NEUROLOGY" || "ONCOLOGY" || "RADIOLOGY" || "UROLOGY", // required
 *   Type: "CONVERSATION" || "DICTATION", // required
 *   ShowSpeakerLabel: true || false,
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
 *   EnableChannelIdentification: true || false,
 *   NumberOfChannels: Number("int"),
 *   ContentIdentificationType: "PHI",
 * };
 * const command = new StartMedicalStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * // { // StartMedicalStreamTranscriptionResponse
 * //   RequestId: "STRING_VALUE",
 * //   LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR" || "ja-JP" || "ko-KR" || "zh-CN" || "th-TH" || "es-ES" || "ar-SA" || "pt-PT" || "ca-ES" || "ar-AE" || "hi-IN" || "zh-HK" || "nl-NL" || "no-NO" || "sv-SE" || "pl-PL" || "fi-FI" || "zh-TW" || "en-IN" || "en-IE" || "en-NZ" || "en-AB" || "en-ZA" || "en-WL" || "de-CH" || "af-ZA" || "eu-ES" || "hr-HR" || "cs-CZ" || "da-DK" || "fa-IR" || "gl-ES" || "el-GR" || "he-IL" || "id-ID" || "lv-LV" || "ms-MY" || "ro-RO" || "ru-RU" || "sr-RS" || "sk-SK" || "so-SO" || "tl-PH" || "uk-UA" || "vi-VN" || "zu-ZA",
 * //   MediaSampleRateHertz: Number("int"),
 * //   MediaEncoding: "pcm" || "ogg-opus" || "flac",
 * //   VocabularyName: "STRING_VALUE",
 * //   Specialty: "PRIMARYCARE" || "CARDIOLOGY" || "NEUROLOGY" || "ONCOLOGY" || "RADIOLOGY" || "UROLOGY",
 * //   Type: "CONVERSATION" || "DICTATION",
 * //   ShowSpeakerLabel: true || false,
 * //   SessionId: "STRING_VALUE",
 * //   TranscriptResultStream: { // MedicalTranscriptResultStream Union: only one key present
 * //     TranscriptEvent: { // MedicalTranscriptEvent
 * //       Transcript: { // MedicalTranscript
 * //         Results: [ // MedicalResultList
 * //           { // MedicalResult
 * //             ResultId: "STRING_VALUE",
 * //             StartTime: Number("double"),
 * //             EndTime: Number("double"),
 * //             IsPartial: true || false,
 * //             Alternatives: [ // MedicalAlternativeList
 * //               { // MedicalAlternative
 * //                 Transcript: "STRING_VALUE",
 * //                 Items: [ // MedicalItemList
 * //                   { // MedicalItem
 * //                     StartTime: Number("double"),
 * //                     EndTime: Number("double"),
 * //                     Type: "pronunciation" || "punctuation",
 * //                     Content: "STRING_VALUE",
 * //                     Confidence: Number("double"),
 * //                     Speaker: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Entities: [ // MedicalEntityList
 * //                   { // MedicalEntity
 * //                     StartTime: Number("double"),
 * //                     EndTime: Number("double"),
 * //                     Category: "STRING_VALUE",
 * //                     Content: "STRING_VALUE",
 * //                     Confidence: Number("double"),
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             ChannelId: "STRING_VALUE",
 * //           },
 * //         ],
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
 * //   EnableChannelIdentification: true || false,
 * //   NumberOfChannels: Number("int"),
 * //   ContentIdentificationType: "PHI",
 * // };
 *
 * ```
 *
 * @param StartMedicalStreamTranscriptionCommandInput - {@link StartMedicalStreamTranscriptionCommandInput}
 * @returns {@link StartMedicalStreamTranscriptionCommandOutput}
 * @see {@link StartMedicalStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMedicalStreamTranscriptionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartMedicalStreamTranscriptionCommand extends $Command
  .classBuilder<
    StartMedicalStreamTranscriptionCommandInput,
    StartMedicalStreamTranscriptionCommandOutput,
    TranscribeStreamingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeStreamingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
      getWebSocketPlugin(config, {
        headerPrefix: "x-amzn-transcribe-",
      }),
      getTranscribeStreamingPlugin(config),
    ];
  })
  .s("Transcribe", "StartMedicalStreamTranscription", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("TranscribeStreamingClient", "StartMedicalStreamTranscriptionCommand")
  .f(
    StartMedicalStreamTranscriptionRequestFilterSensitiveLog,
    StartMedicalStreamTranscriptionResponseFilterSensitiveLog
  )
  .ser(se_StartMedicalStreamTranscriptionCommand)
  .de(de_StartMedicalStreamTranscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMedicalStreamTranscriptionRequest;
      output: StartMedicalStreamTranscriptionResponse;
    };
    sdk: {
      input: StartMedicalStreamTranscriptionCommandInput;
      output: StartMedicalStreamTranscriptionCommandOutput;
    };
  };
}
