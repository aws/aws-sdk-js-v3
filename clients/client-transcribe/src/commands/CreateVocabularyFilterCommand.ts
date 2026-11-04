// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVocabularyFilterRequest, CreateVocabularyFilterResponse } from "../models/models_0";
import { CreateVocabularyFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVocabularyFilterCommand}.
 */
export interface CreateVocabularyFilterCommandInput extends CreateVocabularyFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateVocabularyFilterCommand}.
 */
export interface CreateVocabularyFilterCommandOutput extends CreateVocabularyFilterResponse, __MetadataBearer {}

/**
 * Creates a new custom vocabulary filter.
 *
 * You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.
 *
 * Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to [Character Sets for Custom Vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html) to get the character set for your language.
 *
 * For more information, see [Vocabulary filtering](https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // CreateVocabularyFilterRequest
 *   VocabularyFilterName: "STRING_VALUE", // required
 *   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "am-ET" || "cy-GB" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-MX" || "es-US" || "fa-AF" || "fa-IR" || "fr-CA" || "fr-FR" || "ga-IE" || "gd-GB" || "he-IL" || "hi-IN" || "ht-HT" || "id-ID" || "it-IT" || "ja-JP" || "jv-ID" || "km-KH" || "ko-KR" || "my-MM" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "ne-NP" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sq-AL" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA", // required
 *   Words: [ // Words
 *     "STRING_VALUE",
 *   ],
 *   VocabularyFilterFileUri: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DataAccessRoleArn: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KMSEncryptionContext: { // KMSEncryptionContextMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     KMSKey: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * // { // CreateVocabularyFilterResponse
 * //   VocabularyFilterName: "STRING_VALUE",
 * //   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "am-ET" || "cy-GB" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-MX" || "es-US" || "fa-AF" || "fa-IR" || "fr-CA" || "fr-FR" || "ga-IE" || "gd-GB" || "he-IL" || "hi-IN" || "ht-HT" || "id-ID" || "it-IT" || "ja-JP" || "jv-ID" || "km-KH" || "ko-KR" || "my-MM" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE" || "ab-GE" || "ast-ES" || "az-AZ" || "ba-RU" || "be-BY" || "bg-BG" || "bn-IN" || "bs-BA" || "ca-ES" || "ckb-IQ" || "ckb-IR" || "cs-CZ" || "cy-WL" || "el-GR" || "et-EE" || "et-ET" || "eu-ES" || "fi-FI" || "gl-ES" || "gu-IN" || "ha-NG" || "hr-HR" || "hu-HU" || "hy-AM" || "is-IS" || "ka-GE" || "kab-DZ" || "kk-KZ" || "kn-IN" || "ky-KG" || "lg-IN" || "lt-LT" || "lv-LV" || "mhr-RU" || "mi-NZ" || "mk-MK" || "ml-IN" || "mn-MN" || "mr-IN" || "mt-MT" || "no-NO" || "ne-NP" || "or-IN" || "pa-IN" || "pl-PL" || "ps-AF" || "ro-RO" || "rw-RW" || "si-LK" || "sk-SK" || "sl-SI" || "so-SO" || "sq-AL" || "sr-RS" || "su-ID" || "sw-BI" || "sw-KE" || "sw-RW" || "sw-TZ" || "sw-UG" || "tl-PH" || "tt-RU" || "ug-CN" || "uk-UA" || "uz-UZ" || "wo-SN" || "zh-HK" || "zu-ZA",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateVocabularyFilterCommandInput - {@link CreateVocabularyFilterCommandInput}
 * @returns {@link CreateVocabularyFilterCommandOutput}
 * @see {@link CreateVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link CreateVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Your request didn't pass one or more validation tests. This can occur when the entity you're trying to delete doesn't exist or if it's in a non-terminal state (such as `IN PROGRESS`). See the exception message field for more information.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A resource already exists with this name. Resource names must be unique within an Amazon Web Services account.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * There was an internal error. Check the error message, correct the issue, and try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've either sent too many requests or your input file is too long. Wait before retrying your request, or use a smaller file and try your request again.
 *
 * @throws {@link TranscribeServiceException}
 *
 * Base exception class for all service exceptions from Transcribe service.
 *
 * @public
 */
export class CreateVocabularyFilterCommand extends command<CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput>(
  _ep0,
  _mw0,
  "CreateVocabularyFilter",
  CreateVocabularyFilter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVocabularyFilterRequest;
      output: CreateVocabularyFilterResponse;
    };
    sdk: {
      input: CreateVocabularyFilterCommandInput;
      output: CreateVocabularyFilterCommandOutput;
    };
  };
}
