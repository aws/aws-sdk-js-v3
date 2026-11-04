// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { StartMedicalScribeStreamRequest, StartMedicalScribeStreamResponse } from "../models/models_0";
import { StartMedicalScribeStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the transcription results are streamed to your application.
 *
 * When you start a stream, you first specify the stream configuration in a `MedicalScribeConfigurationEvent`. This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session, your first event must be a `MedicalScribeConfigurationEvent`.
 *
 * After you send a `MedicalScribeConfigurationEvent`, you start `AudioEvents` and Amazon Web Services HealthScribe responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a `MedicalScribeSessionControlEvent` with a `Type` of `END_OF_SESSION` and Amazon Web Services HealthScribe starts the analytics.
 *
 * You can pause or resume streaming. To pause streaming, complete the input stream without sending the `MedicalScribeSessionControlEvent`. To resume streaming, call the `StartMedicalScribeStream` and specify the same SessionId you used to start the stream.
 *
 * The following parameters are required:
 *
 * - `language-code`
 * - `media-encoding`
 * - `media-sample-rate-hertz`
 *
 * For more information on streaming with Amazon Web Services HealthScribe, see [Amazon Web Services HealthScribe](https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe-streaming.html).
 *
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
 *
 * One or more arguments to the `StartStreamTranscription`, `StartMedicalStreamTranscription`, or `StartCallAnalyticsStreamTranscription` operation was not valid. For example, `MediaEncoding` or `LanguageCode` used unsupported values. Check the specified parameters and try your request again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A new stream started with the same session ID. The current stream has been terminated.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * A problem occurred while processing the audio. Amazon Transcribe terminated processing.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Your client has exceeded one of the Amazon Transcribe limits, typically the concurrent stream service quota. This error can also occur if a stream exceeds the maximum session duration. In rare cases, this error can also occur if you increase your number of concurrent streams too quickly. Reduce your number of concurrent streams and try your request again using an exponential backoff strategy.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable. Try your request later.
 *
 * @throws {@link TranscribeStreamingServiceException}
 *
 * Base exception class for all service exceptions from TranscribeStreaming service.
 *
 * @public
 */
export class StartMedicalScribeStreamCommand extends command<StartMedicalScribeStreamCommandInput, StartMedicalScribeStreamCommandOutput>(
  _ep0,
  _mw1,
  "StartMedicalScribeStream",
  StartMedicalScribeStream$
) {
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
