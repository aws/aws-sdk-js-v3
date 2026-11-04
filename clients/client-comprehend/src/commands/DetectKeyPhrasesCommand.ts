// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetectKeyPhrasesRequest, DetectKeyPhrasesResponse } from "../models/models_0";
import { DetectKeyPhrases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetectKeyPhrasesCommand}.
 */
export interface DetectKeyPhrasesCommandInput extends DetectKeyPhrasesRequest {}
/**
 * @public
 *
 * The output of {@link DetectKeyPhrasesCommand}.
 */
export interface DetectKeyPhrasesCommandOutput extends DetectKeyPhrasesResponse, __MetadataBearer {}

/**
 * Detects the key noun phrases found in the text.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectKeyPhrasesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DetectKeyPhrasesRequest
 *   Text: "STRING_VALUE", // required
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new DetectKeyPhrasesCommand(input);
 * const response = await client.send(command);
 * // { // DetectKeyPhrasesResponse
 * //   KeyPhrases: [ // ListOfKeyPhrases
 * //     { // KeyPhrase
 * //       Score: Number("float"),
 * //       Text: "STRING_VALUE",
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectKeyPhrasesCommandInput - {@link DetectKeyPhrasesCommandInput}
 * @returns {@link DetectKeyPhrasesCommandOutput}
 * @see {@link DetectKeyPhrasesCommandInput} for command's `input` shape.
 * @see {@link DetectKeyPhrasesCommandOutput} for command's `response` shape.
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
export class DetectKeyPhrasesCommand extends command<DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput>(
  _ep0,
  _mw0,
  "DetectKeyPhrases",
  DetectKeyPhrases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectKeyPhrasesRequest;
      output: DetectKeyPhrasesResponse;
    };
    sdk: {
      input: DetectKeyPhrasesCommandInput;
      output: DetectKeyPhrasesCommandOutput;
    };
  };
}
