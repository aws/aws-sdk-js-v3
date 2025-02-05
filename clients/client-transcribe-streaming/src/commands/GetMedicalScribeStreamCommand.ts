// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMedicalScribeStreamRequest, GetMedicalScribeStreamResponse } from "../models/models_0";
import { de_GetMedicalScribeStreamCommand, se_GetMedicalScribeStreamCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetMedicalScribeStreamCommand}.
 */
export interface GetMedicalScribeStreamCommandInput extends GetMedicalScribeStreamRequest {}
/**
 * @public
 *
 * The output of {@link GetMedicalScribeStreamCommand}.
 */
export interface GetMedicalScribeStreamCommandOutput extends GetMedicalScribeStreamResponse, __MetadataBearer {}

/**
 * <p>Provides details about the specified Amazon Web Services HealthScribe streaming session.
 *       To view the status of the streaming session, check the <code>StreamStatus</code> field in the response. To get the
 *       details of post-stream analytics, including its status, check the <code>PostStreamAnalyticsResult</code> field in the response.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, GetMedicalScribeStreamCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, GetMedicalScribeStreamCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TranscribeStreamingClient(config);
 * const input = { // GetMedicalScribeStreamRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetMedicalScribeStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetMedicalScribeStreamResponse
 * //   MedicalScribeStreamDetails: { // MedicalScribeStreamDetails
 * //     SessionId: "STRING_VALUE",
 * //     StreamCreatedAt: new Date("TIMESTAMP"),
 * //     StreamEndedAt: new Date("TIMESTAMP"),
 * //     LanguageCode: "en-US",
 * //     MediaSampleRateHertz: Number("int"),
 * //     MediaEncoding: "pcm" || "ogg-opus" || "flac",
 * //     VocabularyName: "STRING_VALUE",
 * //     VocabularyFilterName: "STRING_VALUE",
 * //     VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //     ResourceAccessRoleArn: "STRING_VALUE",
 * //     ChannelDefinitions: [ // MedicalScribeChannelDefinitions
 * //       { // MedicalScribeChannelDefinition
 * //         ChannelId: Number("int"), // required
 * //         ParticipantRole: "PATIENT" || "CLINICIAN", // required
 * //       },
 * //     ],
 * //     EncryptionSettings: { // MedicalScribeEncryptionSettings
 * //       KmsEncryptionContext: { // KMSEncryptionContextMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       KmsKeyId: "STRING_VALUE", // required
 * //     },
 * //     StreamStatus: "IN_PROGRESS" || "PAUSED" || "FAILED" || "COMPLETED",
 * //     PostStreamAnalyticsSettings: { // MedicalScribePostStreamAnalyticsSettings
 * //       ClinicalNoteGenerationSettings: { // ClinicalNoteGenerationSettings
 * //         OutputBucketName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     PostStreamAnalyticsResult: { // MedicalScribePostStreamAnalyticsResult
 * //       ClinicalNoteGenerationResult: { // ClinicalNoteGenerationResult
 * //         ClinicalNoteOutputLocation: "STRING_VALUE",
 * //         TranscriptOutputLocation: "STRING_VALUE",
 * //         Status: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //         FailureReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMedicalScribeStreamCommandInput - {@link GetMedicalScribeStreamCommandInput}
 * @returns {@link GetMedicalScribeStreamCommandOutput}
 * @see {@link GetMedicalScribeStreamCommandInput} for command's `input` shape.
 * @see {@link GetMedicalScribeStreamCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for TranscribeStreamingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One or more arguments to the <code>StartStreamTranscription</code>,
 *       <code>StartMedicalStreamTranscription</code>, or <code>StartCallAnalyticsStreamTranscription</code>
 *       operation was not valid. For example, <code>MediaEncoding</code> or <code>LanguageCode</code>
 *       used unsupported values. Check the specified parameters and try your request again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>A problem occurred while processing the audio. Amazon Transcribe terminated
 *       processing.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
 *       limit. Break your audio stream into smaller chunks and try your request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which doesn't exist.</p>
 *
 * @throws {@link TranscribeStreamingServiceException}
 * <p>Base exception class for all service exceptions from TranscribeStreaming service.</p>
 *
 * @public
 */
export class GetMedicalScribeStreamCommand extends $Command
  .classBuilder<
    GetMedicalScribeStreamCommandInput,
    GetMedicalScribeStreamCommandOutput,
    TranscribeStreamingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeStreamingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Transcribe", "GetMedicalScribeStream", {})
  .n("TranscribeStreamingClient", "GetMedicalScribeStreamCommand")
  .f(void 0, void 0)
  .ser(se_GetMedicalScribeStreamCommand)
  .de(de_GetMedicalScribeStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMedicalScribeStreamRequest;
      output: GetMedicalScribeStreamResponse;
    };
    sdk: {
      input: GetMedicalScribeStreamCommandInput;
      output: GetMedicalScribeStreamCommandOutput;
    };
  };
}
