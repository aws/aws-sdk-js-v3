// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetectTargetedSentimentRequest,
  DetectTargetedSentimentRequestFilterSensitiveLog,
  DetectTargetedSentimentResponse,
  DetectTargetedSentimentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectTargetedSentimentCommand, se_DetectTargetedSentimentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectTargetedSentimentCommand}.
 */
export interface DetectTargetedSentimentCommandInput extends DetectTargetedSentimentRequest {}
/**
 * @public
 *
 * The output of {@link DetectTargetedSentimentCommand}.
 */
export interface DetectTargetedSentimentCommandOutput extends DetectTargetedSentimentResponse, __MetadataBearer {}

/**
 * <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectTargetedSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectTargetedSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DetectTargetedSentimentRequest
 *   Text: "STRING_VALUE", // required
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new DetectTargetedSentimentCommand(input);
 * const response = await client.send(command);
 * // { // DetectTargetedSentimentResponse
 * //   Entities: [ // ListOfTargetedSentimentEntities
 * //     { // TargetedSentimentEntity
 * //       DescriptiveMentionIndex: [ // ListOfDescriptiveMentionIndices
 * //         Number("int"),
 * //       ],
 * //       Mentions: [ // ListOfMentions
 * //         { // TargetedSentimentMention
 * //           Score: Number("float"),
 * //           GroupScore: Number("float"),
 * //           Text: "STRING_VALUE",
 * //           Type: "PERSON" || "LOCATION" || "ORGANIZATION" || "FACILITY" || "BRAND" || "COMMERCIAL_ITEM" || "MOVIE" || "MUSIC" || "BOOK" || "SOFTWARE" || "GAME" || "PERSONAL_TITLE" || "EVENT" || "DATE" || "QUANTITY" || "ATTRIBUTE" || "OTHER",
 * //           MentionSentiment: { // MentionSentiment
 * //             Sentiment: "POSITIVE" || "NEGATIVE" || "NEUTRAL" || "MIXED",
 * //             SentimentScore: { // SentimentScore
 * //               Positive: Number("float"),
 * //               Negative: Number("float"),
 * //               Neutral: Number("float"),
 * //               Mixed: Number("float"),
 * //             },
 * //           },
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectTargetedSentimentCommandInput - {@link DetectTargetedSentimentCommandInput}
 * @returns {@link DetectTargetedSentimentCommandOutput}
 * @see {@link DetectTargetedSentimentCommandInput} for command's `input` shape.
 * @see {@link DetectTargetedSentimentCommandOutput} for command's `response` shape.
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
export class DetectTargetedSentimentCommand extends $Command
  .classBuilder<
    DetectTargetedSentimentCommandInput,
    DetectTargetedSentimentCommandOutput,
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
  .s("Comprehend_20171127", "DetectTargetedSentiment", {})
  .n("ComprehendClient", "DetectTargetedSentimentCommand")
  .f(DetectTargetedSentimentRequestFilterSensitiveLog, DetectTargetedSentimentResponseFilterSensitiveLog)
  .ser(se_DetectTargetedSentimentCommand)
  .de(de_DetectTargetedSentimentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectTargetedSentimentRequest;
      output: DetectTargetedSentimentResponse;
    };
    sdk: {
      input: DetectTargetedSentimentCommandInput;
      output: DetectTargetedSentimentCommandOutput;
    };
  };
}
