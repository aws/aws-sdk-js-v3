// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListBotRecommendationsRequest, ListBotRecommendationsResponse } from "../models/models_1";
import { ListBotRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotRecommendationsCommand}.
 */
export interface ListBotRecommendationsCommandInput extends ListBotRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBotRecommendationsCommand}.
 */
export interface ListBotRecommendationsCommandOutput extends ListBotRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Get a list of bot recommendations that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotRecommendationsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotRecommendationsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotRecommendationsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBotRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBotRecommendationsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationSummaries: [ // BotRecommendationSummaryList
 * //     { // BotRecommendationSummary
 * //       botRecommendationStatus: "Processing" || "Deleting" || "Deleted" || "Downloading" || "Updating" || "Available" || "Failed" || "Stopping" || "Stopped", // required
 * //       botRecommendationId: "STRING_VALUE", // required
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotRecommendationsCommandInput - {@link ListBotRecommendationsCommandInput}
 * @returns {@link ListBotRecommendationsCommandOutput}
 * @see {@link ListBotRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListBotRecommendationsCommandOutput} for command's `response` shape.
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
export class ListBotRecommendationsCommand extends $Command
  .classBuilder<
    ListBotRecommendationsCommandInput,
    ListBotRecommendationsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListBotRecommendations", {})
  .n("LexModelsV2Client", "ListBotRecommendationsCommand")
  .sc(ListBotRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotRecommendationsRequest;
      output: ListBotRecommendationsResponse;
    };
    sdk: {
      input: ListBotRecommendationsCommandInput;
      output: ListBotRecommendationsCommandOutput;
    };
  };
}
