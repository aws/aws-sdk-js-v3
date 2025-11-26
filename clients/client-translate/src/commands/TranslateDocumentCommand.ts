// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TranslateDocumentRequest, TranslateDocumentResponse } from "../models/models_0";
import { TranslateDocument } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TranslateDocumentCommand}.
 */
export interface TranslateDocumentCommandInput extends TranslateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link TranslateDocumentCommand}.
 */
export interface TranslateDocumentCommandOutput extends TranslateDocumentResponse, __MetadataBearer {}

/**
 * <p>Translates the input document from the source language to the target language.
 *       This synchronous operation supports text, HTML, or Word documents as the input document.
 *
 *       <code>TranslateDocument</code> supports translations from English to any supported language,
 *       and from any supported language to English. Therefore, specify either the source language code
 *       or the target language code as “en” (English).
 *     </p>
 *          <p> If you set the <code>Formality</code> parameter, the request will fail if the target language does
 *        not support formality. For a list of target languages that support formality, see
 *        <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html">Setting formality</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, TranslateDocumentCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, TranslateDocumentCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // TranslateDocumentRequest
 *   Document: { // Document
 *     Content: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *     ContentType: "STRING_VALUE", // required
 *   },
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
 * const command = new TranslateDocumentCommand(input);
 * const response = await client.send(command);
 * // { // TranslateDocumentResponse
 * //   TranslatedDocument: { // TranslatedDocument
 * //     Content: new Uint8Array(), // required
 * //   },
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
 * @param TranslateDocumentCommandInput - {@link TranslateDocumentCommandInput}
 * @returns {@link TranslateDocumentCommandOutput}
 * @see {@link TranslateDocumentCommandInput} for command's `input` shape.
 * @see {@link TranslateDocumentCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
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
export class TranslateDocumentCommand extends $Command
  .classBuilder<
    TranslateDocumentCommandInput,
    TranslateDocumentCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShineFrontendService_20170701", "TranslateDocument", {})
  .n("TranslateClient", "TranslateDocumentCommand")
  .sc(TranslateDocument)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TranslateDocumentRequest;
      output: TranslateDocumentResponse;
    };
    sdk: {
      input: TranslateDocumentCommandInput;
      output: TranslateDocumentCommandOutput;
    };
  };
}
