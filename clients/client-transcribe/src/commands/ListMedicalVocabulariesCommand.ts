// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMedicalVocabulariesRequest, ListMedicalVocabulariesResponse } from "../models/models_0";
import { ListMedicalVocabularies$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMedicalVocabulariesCommand}.
 */
export interface ListMedicalVocabulariesCommandInput extends ListMedicalVocabulariesRequest {}
/**
 * @public
 *
 * The output of {@link ListMedicalVocabulariesCommand}.
 */
export interface ListMedicalVocabulariesCommandOutput extends ListMedicalVocabulariesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of custom medical vocabularies that match the specified criteria. If
 *             no criteria are specified, all custom medical vocabularies are returned.</p>
 *          <p>To get detailed information about a specific custom medical vocabulary, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalVocabulariesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalVocabulariesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // ListMedicalVocabulariesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StateEquals: "PENDING" || "READY" || "FAILED",
 *   NameContains: "STRING_VALUE",
 * };
 * const command = new ListMedicalVocabulariesCommand(input);
 * const response = await client.send(command);
 * // { // ListMedicalVocabulariesResponse
 * //   Status: "PENDING" || "READY" || "FAILED",
 * //   NextToken: "STRING_VALUE",
 * //   Vocabularies: [ // Vocabularies
 * //     { // VocabularyInfo
 * //       VocabularyName: "STRING_VALUE",
 * //       LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       VocabularyState: "PENDING" || "READY" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMedicalVocabulariesCommandInput - {@link ListMedicalVocabulariesCommandInput}
 * @returns {@link ListMedicalVocabulariesCommandOutput}
 * @see {@link ListMedicalVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListMedicalVocabulariesCommandOutput} for command's `response` shape.
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
export class ListMedicalVocabulariesCommand extends $Command
  .classBuilder<
    ListMedicalVocabulariesCommandInput,
    ListMedicalVocabulariesCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "ListMedicalVocabularies", {})
  .n("TranscribeClient", "ListMedicalVocabulariesCommand")
  .sc(ListMedicalVocabularies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMedicalVocabulariesRequest;
      output: ListMedicalVocabulariesResponse;
    };
    sdk: {
      input: ListMedicalVocabulariesCommandInput;
      output: ListMedicalVocabulariesCommandOutput;
    };
  };
}
