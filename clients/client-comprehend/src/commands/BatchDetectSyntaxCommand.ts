// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDetectSyntaxRequest, BatchDetectSyntaxResponse } from "../models/models_0";
import { BatchDetectSyntax$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDetectSyntaxCommand}.
 */
export interface BatchDetectSyntaxCommandInput extends BatchDetectSyntaxRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectSyntaxCommand}.
 */
export interface BatchDetectSyntaxCommandOutput extends BatchDetectSyntaxResponse, __MetadataBearer {}

/**
 * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see [Syntax](https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html) in the Comprehend Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectSyntaxCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectSyntaxCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectSyntaxRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt", // required
 * };
 * const command = new BatchDetectSyntaxCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectSyntaxResponse
 * //   ResultList: [ // ListOfDetectSyntaxResult // required
 * //     { // BatchDetectSyntaxItemResult
 * //       Index: Number("int"),
 * //       SyntaxTokens: [ // ListOfSyntaxTokens
 * //         { // SyntaxToken
 * //           TokenId: Number("int"),
 * //           Text: "STRING_VALUE",
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           PartOfSpeech: { // PartOfSpeechTag
 * //             Tag: "ADJ" || "ADP" || "ADV" || "AUX" || "CONJ" || "CCONJ" || "DET" || "INTJ" || "NOUN" || "NUM" || "O" || "PART" || "PRON" || "PROPN" || "PUNCT" || "SCONJ" || "SYM" || "VERB",
 * //             Score: Number("float"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ErrorList: [ // BatchItemErrorList // required
 * //     { // BatchItemError
 * //       Index: Number("int"),
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDetectSyntaxCommandInput - {@link BatchDetectSyntaxCommandInput}
 * @returns {@link BatchDetectSyntaxCommandOutput}
 * @see {@link BatchDetectSyntaxCommandInput} for command's `input` shape.
 * @see {@link BatchDetectSyntaxCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link BatchSizeLimitExceededException} (client fault)
 *
 * The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.
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
export class BatchDetectSyntaxCommand extends command<BatchDetectSyntaxCommandInput, BatchDetectSyntaxCommandOutput>(
  _ep0,
  _mw0,
  "BatchDetectSyntax",
  BatchDetectSyntax$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDetectSyntaxRequest;
      output: BatchDetectSyntaxResponse;
    };
    sdk: {
      input: BatchDetectSyntaxCommandInput;
      output: BatchDetectSyntaxCommandOutput;
    };
  };
}
