// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TranslateTextRequest, TranslateTextResponse } from "../models/models_0";
import { TranslateText$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TranslateTextCommand}.
 */
export interface TranslateTextCommandInput extends TranslateTextRequest {}
/**
 * @public
 *
 * The output of {@link TranslateTextCommand}.
 */
export interface TranslateTextCommandOutput extends TranslateTextResponse, __MetadataBearer {}

/**
 * <p>Translates input text from the source language to the target language. For a list of
 *       available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // TranslateTextRequest
 *   Text: "STRING_VALUE", // required
 *   TerminologyNames: [ // ResourceNameList
 *     "STRING_VALUE",
 *   ],
 *   SourceLanguageCode: "STRING_VALUE", // required
 *   TargetLanguageCode: "STRING_VALUE", // required
 *   Settings: { // TranslationSettings
 *     Formality: "FORMAL" || "INFORMAL",
 *     Profanity: "MASK",
 *     Brevity: "ON",
 *   },
 * };
 * const command = new TranslateTextCommand(input);
 * const response = await client.send(command);
 * // { // TranslateTextResponse
 * //   TranslatedText: "STRING_VALUE", // required
 * //   SourceLanguageCode: "STRING_VALUE", // required
 * //   TargetLanguageCode: "STRING_VALUE", // required
 * //   AppliedTerminologies: [ // AppliedTerminologyList
 * //     { // AppliedTerminology
 * //       Name: "STRING_VALUE",
 * //       Terms: [ // TermList
 * //         { // Term
 * //           SourceText: "STRING_VALUE",
 * //           TargetText: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   AppliedSettings: { // TranslationSettings
 * //     Formality: "FORMAL" || "INFORMAL",
 * //     Profanity: "MASK",
 * //     Brevity: "ON",
 * //   },
 * // };
 *
 * ```
 *
 * @param TranslateTextCommandInput - {@link TranslateTextCommandInput}
 * @returns {@link TranslateTextCommandOutput}
 * @see {@link TranslateTextCommandInput} for command's `input` shape.
 * @see {@link TranslateTextCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link DetectedLanguageLowConfidenceException} (client fault)
 *  <p>The confidence that Amazon Comprehend accurately detected the source language is low. If a
 *       low confidence level is acceptable for your application, you can use the language in the
 *       exception to call Amazon Translate again. For more information, see the <a href="https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html">DetectDominantLanguage</a> operation in the <i>Amazon Comprehend Developer
 *         Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The Amazon Translate service is temporarily unavailable. Wait a bit and then retry your
 *       request.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *       use a smaller document and then retry your request. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link UnsupportedLanguagePairException} (client fault)
 *  <p>Amazon Translate does not support translation from the language of the source text into the requested
 *       target language. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>. </p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class TranslateTextCommand extends $Command
  .classBuilder<
    TranslateTextCommandInput,
    TranslateTextCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShineFrontendService_20170701", "TranslateText", {})
  .n("TranslateClient", "TranslateTextCommand")
  .sc(TranslateText$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TranslateTextRequest;
      output: TranslateTextResponse;
    };
    sdk: {
      input: TranslateTextCommandInput;
      output: TranslateTextCommandOutput;
    };
  };
}
