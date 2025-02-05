// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetectToxicContentRequest,
  DetectToxicContentRequestFilterSensitiveLog,
  DetectToxicContentResponse,
} from "../models/models_0";
import { de_DetectToxicContentCommand, se_DetectToxicContentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectToxicContentCommand}.
 */
export interface DetectToxicContentCommandInput extends DetectToxicContentRequest {}
/**
 * @public
 *
 * The output of {@link DetectToxicContentCommand}.
 */
export interface DetectToxicContentCommandOutput extends DetectToxicContentResponse, __MetadataBearer {}

/**
 * <p>Performs toxicity analysis on the list of text strings that you provide as input.
 *       The API response contains a results list that matches the size of the input list.
 *       For more information about toxicity detection, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/toxicity-detection.html">Toxicity detection</a> in the <i>Amazon Comprehend Developer Guide</i>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectToxicContentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectToxicContentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComprehendClient(config);
 * const input = { // DetectToxicContentRequest
 *   TextSegments: [ // ListOfTextSegments // required
 *     { // TextSegment
 *       Text: "STRING_VALUE", // required
 *     },
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new DetectToxicContentCommand(input);
 * const response = await client.send(command);
 * // { // DetectToxicContentResponse
 * //   ResultList: [ // ListOfToxicLabels
 * //     { // ToxicLabels
 * //       Labels: [ // ListOfToxicContent
 * //         { // ToxicContent
 * //           Name: "GRAPHIC" || "HARASSMENT_OR_ABUSE" || "HATE_SPEECH" || "INSULT" || "PROFANITY" || "SEXUAL" || "VIOLENCE_OR_THREAT",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //       Toxicity: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectToxicContentCommandInput - {@link DetectToxicContentCommandInput}
 * @returns {@link DetectToxicContentCommandOutput}
 * @see {@link DetectToxicContentCommandInput} for command's `input` shape.
 * @see {@link DetectToxicContentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DetectToxicContentCommand extends $Command
  .classBuilder<
    DetectToxicContentCommandInput,
    DetectToxicContentCommandOutput,
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
  .s("Comprehend_20171127", "DetectToxicContent", {})
  .n("ComprehendClient", "DetectToxicContentCommand")
  .f(DetectToxicContentRequestFilterSensitiveLog, void 0)
  .ser(se_DetectToxicContentCommand)
  .de(de_DetectToxicContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectToxicContentRequest;
      output: DetectToxicContentResponse;
    };
    sdk: {
      input: DetectToxicContentCommandInput;
      output: DetectToxicContentCommandOutput;
    };
  };
}
