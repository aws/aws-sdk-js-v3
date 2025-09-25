// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotsRequest, ListBotsResponse } from "../models/models_1";
import { ListBots } from "../schemas/schemas_11_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotsCommand}.
 */
export interface ListBotsCommandInput extends ListBotsRequest {}
/**
 * @public
 *
 * The output of {@link ListBotsCommand}.
 */
export interface ListBotsCommandOutput extends ListBotsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of available bots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotsRequest
 *   sortBy: { // BotSortBy
 *     attribute: "BotName", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // BotFilters
 *     { // BotFilter
 *       name: "BotName" || "BotType", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ" || "NE", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * // { // ListBotsResponse
 * //   botSummaries: [ // BotSummaryList
 * //     { // BotSummary
 * //       botId: "STRING_VALUE",
 * //       botName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * //       latestBotVersion: "STRING_VALUE",
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       botType: "Bot" || "BotNetwork",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotsCommandInput - {@link ListBotsCommandInput}
 * @returns {@link ListBotsCommandOutput}
 * @see {@link ListBotsCommandInput} for command's `input` shape.
 * @see {@link ListBotsCommandOutput} for command's `response` shape.
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
export class ListBotsCommand extends $Command
  .classBuilder<
    ListBotsCommandInput,
    ListBotsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListBots", {})
  .n("LexModelsV2Client", "ListBotsCommand")
  .sc(ListBots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotsRequest;
      output: ListBotsResponse;
    };
    sdk: {
      input: ListBotsCommandInput;
      output: ListBotsCommandOutput;
    };
  };
}
