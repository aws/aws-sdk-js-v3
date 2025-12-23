// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDetectTargetedSentimentRequest, BatchDetectTargetedSentimentResponse } from "../models/models_0";
import { BatchDetectTargetedSentiment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectTargetedSentimentCommand}.
 */
export interface BatchDetectTargetedSentimentCommandInput extends BatchDetectTargetedSentimentRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectTargetedSentimentCommand}.
 */
export interface BatchDetectTargetedSentimentCommandOutput extends BatchDetectTargetedSentimentResponse, __MetadataBearer {}

/**
 * <p>Inspects a batch of documents and returns a sentiment analysis
 *       for each entity identified in the documents.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectTargetedSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectTargetedSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectTargetedSentimentRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new BatchDetectTargetedSentimentCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectTargetedSentimentResponse
 * //   ResultList: [ // ListOfDetectTargetedSentimentResult // required
 * //     { // BatchDetectTargetedSentimentItemResult
 * //       Index: Number("int"),
 * //       Entities: [ // ListOfTargetedSentimentEntities
 * //         { // TargetedSentimentEntity
 * //           DescriptiveMentionIndex: [ // ListOfDescriptiveMentionIndices
 * //             Number("int"),
 * //           ],
 * //           Mentions: [ // ListOfMentions
 * //             { // TargetedSentimentMention
 * //               Score: Number("float"),
 * //               GroupScore: Number("float"),
 * //               Text: "STRING_VALUE",
 * //               Type: "PERSON" || "LOCATION" || "ORGANIZATION" || "FACILITY" || "BRAND" || "COMMERCIAL_ITEM" || "MOVIE" || "MUSIC" || "BOOK" || "SOFTWARE" || "GAME" || "PERSONAL_TITLE" || "EVENT" || "DATE" || "QUANTITY" || "ATTRIBUTE" || "OTHER",
 * //               MentionSentiment: { // MentionSentiment
 * //                 Sentiment: "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //                 SentimentScore: { // SentimentScore
 * //                   Positive: Number("float"),
 * //                   Negative: Number("float"),
 * //                   Neutral: Number("float"),
 * //                   Mixed: Number("float"),
 * //                 },
 * //               },
 * //               BeginOffset: Number("int"),
 * //               EndOffset: Number("int"),
 * //             },
 * //           ],
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
 * @param BatchDetectTargetedSentimentCommandInput - {@link BatchDetectTargetedSentimentCommandInput}
 * @returns {@link BatchDetectTargetedSentimentCommandOutput}
 * @see {@link BatchDetectTargetedSentimentCommandInput} for command's `input` shape.
 * @see {@link BatchDetectTargetedSentimentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link BatchSizeLimitExceededException} (client fault)
 *  <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
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
export class BatchDetectTargetedSentimentCommand extends $Command
  .classBuilder<
    BatchDetectTargetedSentimentCommandInput,
    BatchDetectTargetedSentimentCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "BatchDetectTargetedSentiment", {})
  .n("ComprehendClient", "BatchDetectTargetedSentimentCommand")
  .sc(BatchDetectTargetedSentiment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDetectTargetedSentimentRequest;
      output: BatchDetectTargetedSentimentResponse;
    };
    sdk: {
      input: BatchDetectTargetedSentimentCommandInput;
      output: BatchDetectTargetedSentimentCommandOutput;
    };
  };
}
