// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecommendedIntentsRequest, ListRecommendedIntentsResponse } from "../models/models_1";
import { ListRecommendedIntents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecommendedIntentsCommand}.
 */
export interface ListRecommendedIntentsCommandInput extends ListRecommendedIntentsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendedIntentsCommand}.
 */
export interface ListRecommendedIntentsCommandOutput extends ListRecommendedIntentsResponse, __MetadataBearer {}

/**
 * Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListRecommendedIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListRecommendedIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListRecommendedIntentsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   botRecommendationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRecommendedIntentsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendedIntentsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationId: "STRING_VALUE",
 * //   summaryList: [ // RecommendedIntentSummaryList
 * //     { // RecommendedIntentSummary
 * //       intentId: "STRING_VALUE",
 * //       intentName: "STRING_VALUE",
 * //       sampleUtterancesCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendedIntentsCommandInput - {@link ListRecommendedIntentsCommandInput}
 * @returns {@link ListRecommendedIntentsCommandOutput}
 * @see {@link ListRecommendedIntentsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendedIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You asked to describe a resource that doesn't exist. Check the resource that you are requesting and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached a quota for your bot.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters in your request isn't valid. Check the parameters and try your request again.
 *
 * @throws {@link LexModelsV2ServiceException}
 *
 * Base exception class for all service exceptions from LexModelsV2 service.
 *
 * @public
 */
export class ListRecommendedIntentsCommand extends command<ListRecommendedIntentsCommandInput, ListRecommendedIntentsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecommendedIntents",
  ListRecommendedIntents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendedIntentsRequest;
      output: ListRecommendedIntentsResponse;
    };
    sdk: {
      input: ListRecommendedIntentsCommandInput;
      output: ListRecommendedIntentsCommandOutput;
    };
  };
}
