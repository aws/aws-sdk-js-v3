// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTranscriptionJobsRequest, ListTranscriptionJobsResponse } from "../models/models_0";
import { de_ListTranscriptionJobsCommand, se_ListTranscriptionJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTranscriptionJobsCommand}.
 */
export interface ListTranscriptionJobsCommandInput extends ListTranscriptionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListTranscriptionJobsCommand}.
 */
export interface ListTranscriptionJobsCommandOutput extends ListTranscriptionJobsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of transcription jobs that match the specified criteria. If no
 *             criteria are specified, all transcription jobs are returned.</p>
 *          <p>To get detailed information about a specific transcription job, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListTranscriptionJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListTranscriptionJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // ListTranscriptionJobsRequest
 *   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 *   JobNameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTranscriptionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListTranscriptionJobsResponse
 * //   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   NextToken: "STRING_VALUE",
 * //   TranscriptionJobSummaries: [ // TranscriptionJobSummaries
 * //     { // TranscriptionJobSummary
 * //       TranscriptionJobName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //       TranscriptionJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       FailureReason: "STRING_VALUE",
 * //       OutputLocationType: "CUSTOMER_BUCKET" || "SERVICE_BUCKET",
 * //       ContentRedaction: { // ContentRedaction
 * //         RedactionType: "PII", // required
 * //         RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 * //         PiiEntityTypes: [ // PiiEntityTypes
 * //           "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "ALL",
 * //         ],
 * //       },
 * //       ModelSettings: { // ModelSettings
 * //         LanguageModelName: "STRING_VALUE",
 * //       },
 * //       IdentifyLanguage: true || false,
 * //       IdentifyMultipleLanguages: true || false,
 * //       IdentifiedLanguageScore: Number("float"),
 * //       LanguageCodes: [ // LanguageCodeList
 * //         { // LanguageCodeItem
 * //           LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //           DurationInSeconds: Number("float"),
 * //         },
 * //       ],
 * //       ToxicityDetection: [ // ToxicityDetection
 * //         { // ToxicityDetectionSettings
 * //           ToxicityCategories: [ // ToxicityCategories // required
 * //             "ALL",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTranscriptionJobsCommandInput - {@link ListTranscriptionJobsCommandInput}
 * @returns {@link ListTranscriptionJobsCommandOutput}
 * @see {@link ListTranscriptionJobsCommandInput} for command's `input` shape.
 * @see {@link ListTranscriptionJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class ListTranscriptionJobsCommand extends $Command
  .classBuilder<
    ListTranscriptionJobsCommandInput,
    ListTranscriptionJobsCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Transcribe", "ListTranscriptionJobs", {})
  .n("TranscribeClient", "ListTranscriptionJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListTranscriptionJobsCommand)
  .de(de_ListTranscriptionJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTranscriptionJobsRequest;
      output: ListTranscriptionJobsResponse;
    };
    sdk: {
      input: ListTranscriptionJobsCommandInput;
      output: ListTranscriptionJobsCommandOutput;
    };
  };
}
