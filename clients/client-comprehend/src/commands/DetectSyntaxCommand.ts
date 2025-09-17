// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetectSyntaxRequest,
  DetectSyntaxRequestFilterSensitiveLog,
  DetectSyntaxResponse,
  DetectSyntaxResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectSyntaxCommand, se_DetectSyntaxCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Inspects text for syntax and the part of speech of words in the document. For more
 *       information, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
 *     </p>
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
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *  <p>Amazon Comprehend can't process the language of the input text. For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DetectSyntaxCommand extends $Command
  .classBuilder<
    DetectSyntaxCommandInput,
    DetectSyntaxCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "DetectSyntax", {})
  .n("ComprehendClient", "DetectSyntaxCommand")
  .f(DetectSyntaxRequestFilterSensitiveLog, DetectSyntaxResponseFilterSensitiveLog)
  .ser(se_DetectSyntaxCommand)
  .de(de_DetectSyntaxCommand)
  .build() {
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
