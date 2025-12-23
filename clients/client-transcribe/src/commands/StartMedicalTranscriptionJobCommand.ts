// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartMedicalTranscriptionJobRequest, StartMedicalTranscriptionJobResponse } from "../models/models_0";
import { StartMedicalTranscriptionJob$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMedicalTranscriptionJobCommand}.
 */
export interface StartMedicalTranscriptionJobCommandInput extends StartMedicalTranscriptionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartMedicalTranscriptionJobCommand}.
 */
export interface StartMedicalTranscriptionJobCommandOutput extends StartMedicalTranscriptionJobResponse, __MetadataBearer {}

/**
 * <p>Transcribes the audio from a medical dictation or conversation and applies any
 *             additional Request Parameters you choose to include in your request.</p>
 *          <p>In addition to many standard transcription features, Amazon Transcribe Medical
 *             provides you with a robust medical vocabulary and, optionally, content identification,
 *             which adds flags to personal health information (PHI). To learn more about these
 *             features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical
 *                 works</a>.</p>
 *          <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload
 *             your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location
 *             of the file using the <code>Media</code> parameter.</p>
 *          <p>You must include the following parameters in your
 *                 <code>StartMedicalTranscriptionJob</code> request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>region</code>: The Amazon Web Services Region where you are making your
 *                     request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and
 *                         quotas</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MedicalTranscriptionJobName</code>: A custom name you create for your
 *                     transcription job that is unique within your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location
 *                     of your media file.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LanguageCode</code>: This must be <code>en-US</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OutputBucketName</code>: The Amazon S3 bucket where you want
 *                     your transcript stored. If you want your output stored in a sub-folder of this
 *                     bucket, you must also include <code>OutputKey</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Type</code>: Choose whether your audio is a conversation or a
 *                     dictation.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // StartMedicalTranscriptionJobRequest
 *   MedicalTranscriptionJobName: "STRING_VALUE", // required
 *   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA", // required
 *   MediaSampleRateHertz: Number("int"),
 *   MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm" || "m4a",
 *   Media: { // Media
 *     MediaFileUri: "STRING_VALUE",
 *     RedactedMediaFileUri: "STRING_VALUE",
 *   },
 *   OutputBucketName: "STRING_VALUE", // required
 *   OutputKey: "STRING_VALUE",
 *   OutputEncryptionKMSKeyId: "STRING_VALUE",
 *   KMSEncryptionContext: { // KMSEncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Settings: { // MedicalTranscriptionSetting
 *     ShowSpeakerLabels: true || false,
 *     MaxSpeakerLabels: Number("int"),
 *     ChannelIdentification: true || false,
 *     ShowAlternatives: true || false,
 *     MaxAlternatives: Number("int"),
 *     VocabularyName: "STRING_VALUE",
 *   },
 *   ContentIdentificationType: "PHI",
 *   Specialty: "PRIMARYCARE", // required
 *   Type: "CONVERSATION" || "DICTATION", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMedicalTranscriptionJobResponse
 * //   MedicalTranscriptionJob: { // MedicalTranscriptionJob
 * //     MedicalTranscriptionJobName: "STRING_VALUE",
 * //     TranscriptionJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //     MediaSampleRateHertz: Number("int"),
 * //     MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm" || "m4a",
 * //     Media: { // Media
 * //       MediaFileUri: "STRING_VALUE",
 * //       RedactedMediaFileUri: "STRING_VALUE",
 * //     },
 * //     Transcript: { // MedicalTranscript
 * //       TranscriptFileUri: "STRING_VALUE",
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CompletionTime: new Date("TIMESTAMP"),
 * //     FailureReason: "STRING_VALUE",
 * //     Settings: { // MedicalTranscriptionSetting
 * //       ShowSpeakerLabels: true || false,
 * //       MaxSpeakerLabels: Number("int"),
 * //       ChannelIdentification: true || false,
 * //       ShowAlternatives: true || false,
 * //       MaxAlternatives: Number("int"),
 * //       VocabularyName: "STRING_VALUE",
 * //     },
 * //     ContentIdentificationType: "PHI",
 * //     Specialty: "PRIMARYCARE",
 * //     Type: "CONVERSATION" || "DICTATION",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StartMedicalTranscriptionJobCommandInput - {@link StartMedicalTranscriptionJobCommandInput}
 * @returns {@link StartMedicalTranscriptionJobCommandOutput}
 * @see {@link StartMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartMedicalTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class StartMedicalTranscriptionJobCommand extends $Command
  .classBuilder<
    StartMedicalTranscriptionJobCommandInput,
    StartMedicalTranscriptionJobCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "StartMedicalTranscriptionJob", {})
  .n("TranscribeClient", "StartMedicalTranscriptionJobCommand")
  .sc(StartMedicalTranscriptionJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMedicalTranscriptionJobRequest;
      output: StartMedicalTranscriptionJobResponse;
    };
    sdk: {
      input: StartMedicalTranscriptionJobCommandInput;
      output: StartMedicalTranscriptionJobCommandOutput;
    };
  };
}
