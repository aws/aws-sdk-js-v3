// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTranscriptionJobRequest, GetTranscriptionJobResponse } from "../models/models_0";
import { GetTranscriptionJob } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTranscriptionJobCommand}.
 */
export interface GetTranscriptionJobCommandInput extends GetTranscriptionJobRequest {}
/**
 * @public
 *
 * The output of {@link GetTranscriptionJobCommand}.
 */
export interface GetTranscriptionJobCommandOutput extends GetTranscriptionJobResponse, __MetadataBearer {}

/**
 * <p>Provides information about the specified transcription job.</p>
 *          <p>To view the status of the specified transcription job, check the
 *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished. You can find the results at the location specified in
 *                 <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
 *                 <code>FailureReason</code> provides details on why your transcription job
 *             failed.</p>
 *          <p>If you enabled content redaction, the redacted transcript can be found at the location
 *             specified in <code>RedactedTranscriptFileUri</code>.</p>
 *          <p>To get a list of your transcription jobs, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // GetTranscriptionJobRequest
 *   TranscriptionJobName: "STRING_VALUE", // required
 * };
 * const command = new GetTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * // { // GetTranscriptionJobResponse
 * //   TranscriptionJob: { // TranscriptionJob
 * //     TranscriptionJobName: "STRING_VALUE",
 * //     TranscriptionJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //     MediaSampleRateHertz: Number("int"),
 * //     MediaFormat: "mp3" || "mp4" || "wav" || "flac" || "ogg" || "amr" || "webm" || "m4a",
 * //     Media: { // Media
 * //       MediaFileUri: "STRING_VALUE",
 * //       RedactedMediaFileUri: "STRING_VALUE",
 * //     },
 * //     Transcript: { // Transcript
 * //       TranscriptFileUri: "STRING_VALUE",
 * //       RedactedTranscriptFileUri: "STRING_VALUE",
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CompletionTime: new Date("TIMESTAMP"),
 * //     FailureReason: "STRING_VALUE",
 * //     Settings: { // Settings
 * //       VocabularyName: "STRING_VALUE",
 * //       ShowSpeakerLabels: true || false,
 * //       MaxSpeakerLabels: Number("int"),
 * //       ChannelIdentification: true || false,
 * //       ShowAlternatives: true || false,
 * //       MaxAlternatives: Number("int"),
 * //       VocabularyFilterName: "STRING_VALUE",
 * //       VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //     },
 * //     ModelSettings: { // ModelSettings
 * //       LanguageModelName: "STRING_VALUE",
 * //     },
 * //     JobExecutionSettings: { // JobExecutionSettings
 * //       AllowDeferredExecution: true || false,
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //     },
 * //     ContentRedaction: { // ContentRedaction
 * //       RedactionType: "PII", // required
 * //       RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 * //       PiiEntityTypes: [ // PiiEntityTypes
 * //         "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "ALL",
 * //       ],
 * //     },
 * //     IdentifyLanguage: true || false,
 * //     IdentifyMultipleLanguages: true || false,
 * //     LanguageOptions: [ // LanguageOptions
 * //       "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //     ],
 * //     IdentifiedLanguageScore: Number("float"),
 * //     LanguageCodes: [ // LanguageCodeList
 * //       { // LanguageCodeItem
 * //         LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //         DurationInSeconds: Number("float"),
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Subtitles: { // SubtitlesOutput
 * //       Formats: [ // SubtitleFormats
 * //         "vtt" || "srt",
 * //       ],
 * //       SubtitleFileUris: [ // SubtitleFileUris
 * //         "STRING_VALUE",
 * //       ],
 * //       OutputStartIndex: Number("int"),
 * //     },
 * //     LanguageIdSettings: { // LanguageIdSettingsMap
 * //       "<keys>": { // LanguageIdSettings
 * //         VocabularyName: "STRING_VALUE",
 * //         VocabularyFilterName: "STRING_VALUE",
 * //         LanguageModelName: "STRING_VALUE",
 * //       },
 * //     },
 * //     ToxicityDetection: [ // ToxicityDetection
 * //       { // ToxicityDetectionSettings
 * //         ToxicityCategories: [ // ToxicityCategories // required
 * //           "ALL",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTranscriptionJobCommandInput - {@link GetTranscriptionJobCommandInput}
 * @returns {@link GetTranscriptionJobCommandOutput}
 * @see {@link GetTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link GetTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class GetTranscriptionJobCommand extends $Command
  .classBuilder<
    GetTranscriptionJobCommandInput,
    GetTranscriptionJobCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "GetTranscriptionJob", {})
  .n("TranscribeClient", "GetTranscriptionJobCommand")
  .sc(GetTranscriptionJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTranscriptionJobRequest;
      output: GetTranscriptionJobResponse;
    };
    sdk: {
      input: GetTranscriptionJobCommandInput;
      output: GetTranscriptionJobCommandOutput;
    };
  };
}
