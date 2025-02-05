// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCallAnalyticsJobsRequest, ListCallAnalyticsJobsResponse } from "../models/models_0";
import { de_ListCallAnalyticsJobsCommand, se_ListCallAnalyticsJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCallAnalyticsJobsCommand}.
 */
export interface ListCallAnalyticsJobsCommandInput extends ListCallAnalyticsJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListCallAnalyticsJobsCommand}.
 */
export interface ListCallAnalyticsJobsCommandOutput extends ListCallAnalyticsJobsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of Call Analytics jobs that match the specified criteria. If no
 *             criteria are specified, all Call Analytics jobs are returned.</p>
 *          <p>To get detailed information about a specific Call Analytics job, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListCallAnalyticsJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListCallAnalyticsJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TranscribeClient(config);
 * const input = { // ListCallAnalyticsJobsRequest
 *   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 *   JobNameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCallAnalyticsJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListCallAnalyticsJobsResponse
 * //   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   NextToken: "STRING_VALUE",
 * //   CallAnalyticsJobSummaries: [ // CallAnalyticsJobSummaries
 * //     { // CallAnalyticsJobSummary
 * //       CallAnalyticsJobName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zu-ZA",
 * //       CallAnalyticsJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       CallAnalyticsJobDetails: { // CallAnalyticsJobDetails
 * //         Skipped: [ // CallAnalyticsSkippedFeatureList
 * //           { // CallAnalyticsSkippedFeature
 * //             Feature: "GENERATIVE_SUMMARIZATION",
 * //             ReasonCode: "INSUFFICIENT_CONVERSATION_CONTENT" || "FAILED_SAFETY_GUIDELINES",
 * //             Message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCallAnalyticsJobsCommandInput - {@link ListCallAnalyticsJobsCommandInput}
 * @returns {@link ListCallAnalyticsJobsCommandOutput}
 * @see {@link ListCallAnalyticsJobsCommandInput} for command's `input` shape.
 * @see {@link ListCallAnalyticsJobsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListCallAnalyticsJobsCommand extends $Command
  .classBuilder<
    ListCallAnalyticsJobsCommandInput,
    ListCallAnalyticsJobsCommandOutput,
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
  .s("Transcribe", "ListCallAnalyticsJobs", {})
  .n("TranscribeClient", "ListCallAnalyticsJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListCallAnalyticsJobsCommand)
  .de(de_ListCallAnalyticsJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCallAnalyticsJobsRequest;
      output: ListCallAnalyticsJobsResponse;
    };
    sdk: {
      input: ListCallAnalyticsJobsCommandInput;
      output: ListCallAnalyticsJobsCommandOutput;
    };
  };
}
