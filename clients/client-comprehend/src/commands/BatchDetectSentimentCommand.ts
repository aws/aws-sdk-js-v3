// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDetectSentimentRequest, BatchDetectSentimentResponse } from "../models/models_0";
import { BatchDetectSentiment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDetectSentimentCommand}.
 */
export interface BatchDetectSentimentCommandInput extends BatchDetectSentimentRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectSentimentCommand}.
 */
export interface BatchDetectSentimentCommandOutput extends BatchDetectSentimentResponse, __MetadataBearer {}

/**
 * Inspects a batch of documents and returns an inference of the prevailing sentiment, `POSITIVE`, `NEUTRAL`, `MIXED`, or `NEGATIVE`, in each one.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectSentimentRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new BatchDetectSentimentCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectSentimentResponse
 * //   ResultList: [ // ListOfDetectSentimentResult // required
 * //     { // BatchDetectSentimentItemResult
 * //       Index: Number("int"),
 * //       Sentiment: "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //       SentimentScore: { // SentimentScore
 * //         Positive: Number("float"),
 * //         Negative: Number("float"),
 * //         Neutral: Number("float"),
 * //         Mixed: Number("float"),
 * //       },
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
 * @param BatchDetectSentimentCommandInput - {@link BatchDetectSentimentCommandInput}
 * @returns {@link BatchDetectSentimentCommandOutput}
 * @see {@link BatchDetectSentimentCommandInput} for command's `input` shape.
 * @see {@link BatchDetectSentimentCommandOutput} for command's `response` shape.
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
export class BatchDetectSentimentCommand extends command<BatchDetectSentimentCommandInput, BatchDetectSentimentCommandOutput>(
  _ep0,
  _mw0,
  "BatchDetectSentiment",
  BatchDetectSentiment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDetectSentimentRequest;
      output: BatchDetectSentimentResponse;
    };
    sdk: {
      input: BatchDetectSentimentCommandInput;
      output: BatchDetectSentimentCommandOutput;
    };
  };
}
