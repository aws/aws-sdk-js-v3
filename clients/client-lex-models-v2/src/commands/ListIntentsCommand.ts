// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListIntentsRequest, ListIntentsResponse } from "../models/models_1";
import { ListIntents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntentsCommand}.
 */
export interface ListIntentsCommandInput extends ListIntentsRequest {}
/**
 * @public
 *
 * The output of {@link ListIntentsCommand}.
 */
export interface ListIntentsCommandOutput extends ListIntentsResponse, __MetadataBearer {}

/**
 * <p>Get a list of intents that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListIntentsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sortBy: { // IntentSortBy
 *     attribute: "IntentName" || "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // IntentFilters
 *     { // IntentFilter
 *       name: "IntentName", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIntentsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntentsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   intentSummaries: [ // IntentSummaryList
 * //     { // IntentSummary
 * //       intentId: "STRING_VALUE",
 * //       intentName: "STRING_VALUE",
 * //       intentDisplayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       parentIntentSignature: "STRING_VALUE",
 * //       inputContexts: [ // InputContextsList
 * //         { // InputContext
 * //           name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       outputContexts: [ // OutputContextsList
 * //         { // OutputContext
 * //           name: "STRING_VALUE", // required
 * //           timeToLiveInSeconds: Number("int"), // required
 * //           turnsToLive: Number("int"), // required
 * //         },
 * //       ],
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntentsCommandInput - {@link ListIntentsCommandInput}
 * @returns {@link ListIntentsCommandOutput}
 * @see {@link ListIntentsCommandInput} for command's `input` shape.
 * @see {@link ListIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
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
export class ListIntentsCommand extends $Command
  .classBuilder<
    ListIntentsCommandInput,
    ListIntentsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListIntents", {})
  .n("LexModelsV2Client", "ListIntentsCommand")
  .sc(ListIntents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntentsRequest;
      output: ListIntentsResponse;
    };
    sdk: {
      input: ListIntentsCommandInput;
      output: ListIntentsCommandOutput;
    };
  };
}
