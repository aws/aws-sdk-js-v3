// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getTranscribeStreamingPlugin } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartMedicalScribeStreamRequest, StartMedicalScribeStreamResponse } from "../models/models_0";
import { StartMedicalScribeStream } from "../schemas/schemas_0";
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
 * The input for {@link StartMedicalScribeStreamCommand}.
 */
export interface StartMedicalScribeStreamCommandInput extends StartMedicalScribeStreamRequest {}
/**
 * @public
 *
 * The output of {@link StartMedicalScribeStreamCommand}.
 */
export interface StartMedicalScribeStreamCommandOutput extends StartMedicalScribeStreamResponse, __MetadataBearer {}

/**
 * <p>Starts a bidirectional HTTP/2 stream, where audio is streamed to
 *       Amazon Web Services HealthScribe
 *       and the transcription results are streamed to your application.</p>
 *          <p>When you start a stream, you first specify the stream configuration in a <code>MedicalScribeConfigurationEvent</code>.
 *       This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional
 *       streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session,
 *       your first event must be a <code>MedicalScribeConfigurationEvent</code>. </p>
 *          <p>
 *       After you send a <code>MedicalScribeConfigurationEvent</code>, you start <code>AudioEvents</code> and Amazon Web Services HealthScribe
 *       responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a <code>MedicalScribeSessionControlEvent</code> with a <code>Type</code> of
 *       <code>END_OF_SESSION</code> and Amazon Web Services HealthScribe starts the analytics.
 *     </p>
 *          <p>You can pause or resume streaming.
 *      To pause streaming, complete the input stream without sending the
 *       <code>MedicalScribeSessionControlEvent</code>.
 *       To resume streaming, call the <code>StartMedicalScribeStream</code> and specify the same SessionId you used to start the stream.
 *     </p>
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
 *                   <code>media-sample-rate-hertz</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p></p>
 *          <p>For more information on streaming with
 *       Amazon Web Services HealthScribe,
 *       see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe-streaming.html">Amazon Web Services HealthScribe</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartMedicalScribeStreamCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartMedicalScribeStreamCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * // import type { TranscribeStreamingClientConfig } from "@aws-sdk/client-transcribe-streaming";
 * const config = {}; // type is TranscribeStreamingClientConfig
 * const client = new TranscribeStreamingClient(config);
 * const input = { // StartMedicalScribeStreamRequest
 *   SessionId: "STRING_VALUE",
 *   LanguageCode: "en-US", // required
 *   MediaSampleRateHertz: Number("int"), // required
 *   MediaEncoding: "pcm" || "ogg-opus" || "flac", // required
 *   InputStream: { // MedicalScribeInputStream Union: only one key present
 *     AudioEvent: { // MedicalScribeAudioEvent
 *       AudioChunk: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     SessionControlEvent: { // MedicalScribeSessionControlEvent
 *       Type: "END_OF_SESSION", // required
 *     },
 *     ConfigurationEvent: { // MedicalScribeConfigurationEvent
 *       VocabularyName: "STRING_VALUE",
 *       VocabularyFilterName: "STRING_VALUE",
 *       VocabularyFilterMethod: "remove" || "mask" || "tag",
 *       ResourceAccessRoleArn: "STRING_VALUE", // required
 *       ChannelDefinitions: [ // MedicalScribeChannelDefinitions
 *         { // MedicalScribeChannelDefinition
 *           ChannelId: Number("int"), // required
 *           ParticipantRole: "PATIENT" || "CLINICIAN", // required
 *         },
 *       ],
 *       EncryptionSettings: { // MedicalScribeEncryptionSettings
 *         KmsEncryptionContext: { // KMSEncryptionContextMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         KmsKeyId: "STRING_VALUE", // required
 *       },
 *       PostStreamAnalyticsSettings: { // MedicalScribePostStreamAnalyticsSettings
 *         ClinicalNoteGenerationSettings: { // ClinicalNoteGenerationSettings
 *           OutputBucketName: "STRING_VALUE", // required
 *           NoteTemplate: "HISTORY_AND_PHYSICAL" || "GIRPP" || "DAP" || "SIRP" || "BIRP" || "BEHAVIORAL_SOAP" || "PHYSICAL_SOAP",
 *         },
 *       },
 *       MedicalScribeContext: { // MedicalScribeContext
 *         PatientContext: { // MedicalScribePatientContext
 *           Pronouns: "HE_HIM" || "SHE_HER" || "THEY_THEM",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new StartMedicalScribeStreamCommand(input);
 * const response = await client.send(command);
 * // { // StartMedicalScribeStreamResponse
 * //   SessionId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   LanguageCode: "en-US",
 * //   MediaSampleRateHertz: Number("int"),
 * //   MediaEncoding: "pcm" || "ogg-opus" || "flac",
 * //   ResultStream: { // MedicalScribeResultStream Union: only one key present
 * //     TranscriptEvent: { // MedicalScribeTranscriptEvent
 * //       TranscriptSegment: { // MedicalScribeTranscriptSegment
 * //         SegmentId: "STRING_VALUE",
 * //         BeginAudioTime: Number("double"),
 * //         EndAudioTime: Number("double"),
 * //         Content: "STRING_VALUE",
 * //         Items: [ // MedicalScribeTranscriptItemList
 * //           { // MedicalScribeTranscriptItem
 * //             BeginAudioTime: Number("double"),
 * //             EndAudioTime: Number("double"),
 * //             Type: "pronunciation" || "punctuation",
 * //             Confidence: Number("double"),
 * //             Content: "STRING_VALUE",
 * //             VocabularyFilterMatch: true || false,
 * //           },
 * //         ],
 * //         IsPartial: true || false,
 * //         ChannelId: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param StartMedicalScribeStreamCommandInput - {@link StartMedicalScribeStreamCommandInput}
 * @returns {@link StartMedicalScribeStreamCommandOutput}
 * @see {@link StartMedicalScribeStreamCommandInput} for command's `input` shape.
 * @see {@link StartMedicalScribeStreamCommandOutput} for command's `response` shape.
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
export class StartMedicalScribeStreamCommand extends $Command
  .classBuilder<
    StartMedicalScribeStreamCommandInput,
    StartMedicalScribeStreamCommandOutput,
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
  .s("Transcribe", "StartMedicalScribeStream", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("TranscribeStreamingClient", "StartMedicalScribeStreamCommand")
  .sc(StartMedicalScribeStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMedicalScribeStreamRequest;
      output: StartMedicalScribeStreamResponse;
    };
    sdk: {
      input: StartMedicalScribeStreamCommandInput;
      output: StartMedicalScribeStreamCommandOutput;
    };
  };
}
