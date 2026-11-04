// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TranslateDocumentRequest, TranslateDocumentResponse } from "../models/models_0";
import { TranslateDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Translates the input document from the source language to the target language. This synchronous operation supports text, HTML, or Word documents as the input document. `TranslateDocument` supports translations from English to any supported language, and from any supported language to English. Therefore, specify either the source language code or the target language code as “en” (English).
 *
 * If you set the `Formality` parameter, the request will fail if the target language does not support formality. For a list of target languages that support formality, see [Setting formality](https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html).
 *
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
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request that you made is not valid. Check your request to determine why it's not valid and then retry the request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The specified limit has been exceeded. Review your request and retry it with a quantity below the stated limit.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are looking for has not been found. Review the resource you're looking for and see if a different resource will accomplish your needs before retrying the revised request.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The Amazon Translate service is temporarily unavailable. Wait a bit and then retry your request.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You have made too many requests within a short period of time. Wait for a short time and then try your request again.
 *
 * @throws {@link UnsupportedLanguagePairException} (client fault)
 *
 * Amazon Translate does not support translation from the language of the source text into the requested target language. For more information, see [Supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html).
 *
 * @throws {@link TranslateServiceException}
 *
 * Base exception class for all service exceptions from Translate service.
 *
 * @public
 */
export class TranslateDocumentCommand extends command<TranslateDocumentCommandInput, TranslateDocumentCommandOutput>(
  _ep0,
  _mw0,
  "TranslateDocument",
  TranslateDocument$
) {
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
