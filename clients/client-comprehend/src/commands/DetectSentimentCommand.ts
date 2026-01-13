// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DetectSentimentRequest, DetectSentimentResponse } from "../models/models_0";
import { DetectSentiment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectSentimentCommand}.
 */
export interface DetectSentimentCommandInput extends DetectSentimentRequest {}
/**
 * @public
 *
 * The output of {@link DetectSentimentCommand}.
 */
export interface DetectSentimentCommandOutput extends DetectSentimentResponse, __MetadataBearer {}

/**
 * <p>Inspects text and returns an inference of the prevailing sentiment
 *         (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DetectSentimentRequest
 *   Text: "STRING_VALUE", // required
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new DetectSentimentCommand(input);
 * const response = await client.send(command);
 * // { // DetectSentimentResponse
 * //   Sentiment: "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //   SentimentScore: { // SentimentScore
 * //     Positive: Number("float"),
 * //     Negative: Number("float"),
 * //     Neutral: Number("float"),
 * //     Mixed: Number("float"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DetectSentimentCommandInput - {@link DetectSentimentCommandInput}
 * @returns {@link DetectSentimentCommandOutput}
 * @see {@link DetectSentimentCommandInput} for command's `input` shape.
 * @see {@link DetectSentimentCommandOutput} for command's `response` shape.
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
export class DetectSentimentCommand extends $Command
  .classBuilder<
    DetectSentimentCommandInput,
    DetectSentimentCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "DetectSentiment", {})
  .n("ComprehendClient", "DetectSentimentCommand")
  .sc(DetectSentiment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectSentimentRequest;
      output: DetectSentimentResponse;
    };
    sdk: {
      input: DetectSentimentCommandInput;
      output: DetectSentimentCommandOutput;
    };
  };
}
