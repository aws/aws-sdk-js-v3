// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetectKeyPhrasesRequest,
  DetectKeyPhrasesRequestFilterSensitiveLog,
  DetectKeyPhrasesResponse,
  DetectKeyPhrasesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectKeyPhrasesCommand, se_DetectKeyPhrasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Detects the key noun phrases found in the text. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectKeyPhrasesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
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
export class DetectKeyPhrasesCommand extends $Command
  .classBuilder<
    DetectKeyPhrasesCommandInput,
    DetectKeyPhrasesCommandOutput,
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
  .s("Comprehend_20171127", "DetectKeyPhrases", {})
  .n("ComprehendClient", "DetectKeyPhrasesCommand")
  .f(DetectKeyPhrasesRequestFilterSensitiveLog, DetectKeyPhrasesResponseFilterSensitiveLog)
  .ser(se_DetectKeyPhrasesCommand)
  .de(de_DetectKeyPhrasesCommand)
  .build() {
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
