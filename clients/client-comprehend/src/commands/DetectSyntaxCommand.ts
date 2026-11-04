// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetectSyntaxRequest, DetectSyntaxResponse } from "../models/models_0";
import { DetectSyntax$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetectSyntaxCommand}.
 */
export interface DetectSyntaxCommandInput extends DetectSyntaxRequest {}
/**
 * @public
 *
 * The output of {@link DetectSyntaxCommand}.
 */
export interface DetectSyntaxCommandOutput extends DetectSyntaxResponse, __MetadataBearer {}

/**
 * Inspects text for syntax and the part of speech of words in the document. For more information, see [Syntax](https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html) in the Comprehend Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectSyntaxCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectSyntaxCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DetectSyntaxRequest
 *   Text: "STRING_VALUE", // required
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt", // required
 * };
 * const command = new DetectSyntaxCommand(input);
 * const response = await client.send(command);
 * // { // DetectSyntaxResponse
 * //   SyntaxTokens: [ // ListOfSyntaxTokens
 * //     { // SyntaxToken
 * //       TokenId: Number("int"),
 * //       Text: "STRING_VALUE",
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //       PartOfSpeech: { // PartOfSpeechTag
 * //         Tag: "ADJ" || "ADP" || "ADV" || "AUX" || "CONJ" || "CCONJ" || "DET" || "INTJ" || "NOUN" || "NUM" || "O" || "PART" || "PRON" || "PROPN" || "PUNCT" || "SCONJ" || "SYM" || "VERB",
 * //         Score: Number("float"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectSyntaxCommandInput - {@link DetectSyntaxCommandInput}
 * @returns {@link DetectSyntaxCommandOutput}
 * @see {@link DetectSyntaxCommandInput} for command's `input` shape.
 * @see {@link DetectSyntaxCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *
 * The size of the input text exceeds the limit. Use a smaller document.
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *
 * Amazon Comprehend can't process the language of the input text. For a list of supported languages, [Supported languages](https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html) in the Comprehend Developer Guide.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class DetectSyntaxCommand extends command<DetectSyntaxCommandInput, DetectSyntaxCommandOutput>(
  _ep0,
  _mw0,
  "DetectSyntax",
  DetectSyntax$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectSyntaxRequest;
      output: DetectSyntaxResponse;
    };
    sdk: {
      input: DetectSyntaxCommandInput;
      output: DetectSyntaxCommandOutput;
    };
  };
}
