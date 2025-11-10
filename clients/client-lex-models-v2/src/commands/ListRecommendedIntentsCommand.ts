// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListRecommendedIntentsRequest, ListRecommendedIntentsResponse } from "../models/models_1";
import { ListRecommendedIntents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets a list of recommended intents provided by the bot
 *          recommendation that you can use in your bot. Intents in the
 *          response are ordered by relevance.</p>
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
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class ListRecommendedIntentsCommand extends $Command
  .classBuilder<
    ListRecommendedIntentsCommandInput,
    ListRecommendedIntentsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListRecommendedIntents", {})
  .n("LexModelsV2Client", "ListRecommendedIntentsCommand")
  .sc(ListRecommendedIntents)
  .build() {
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
