// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetectSentimentRequest, DetectSentimentResponse } from "../models/models_0";
import { DetectSentiment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Inspects text and returns an inference of the prevailing sentiment (`POSITIVE`, `NEUTRAL`, `MIXED`, or `NEGATIVE`).
 *
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
export class DetectSentimentCommand extends command<DetectSentimentCommandInput, DetectSentimentCommandOutput>(
  _ep0,
  _mw0,
  "DetectSentiment",
  DetectSentiment$
) {
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
