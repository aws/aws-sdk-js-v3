// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotLocalesRequest, ListBotLocalesResponse } from "../models/models_1";
import { de_ListBotLocalesCommand, se_ListBotLocalesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotLocalesCommand}.
 */
export interface ListBotLocalesCommandInput extends ListBotLocalesRequest {}
/**
 * @public
 *
 * The output of {@link ListBotLocalesCommand}.
 */
export interface ListBotLocalesCommandOutput extends ListBotLocalesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of locales for the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotLocalesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotLocalesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotLocalesRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   sortBy: { // BotLocaleSortBy
 *     attribute: "BotLocaleName", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // BotLocaleFilters
 *     { // BotLocaleFilter
 *       name: "BotLocaleName", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBotLocalesCommand(input);
 * const response = await client.send(command);
 * // { // ListBotLocalesResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   botLocaleSummaries: [ // BotLocaleSummaryList
 * //     { // BotLocaleSummary
 * //       localeId: "STRING_VALUE",
 * //       localeName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       botLocaleStatus: "Creating" || "Building" || "Built" || "ReadyExpressTesting" || "Failed" || "Deleting" || "NotBuilt" || "Importing" || "Processing",
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       lastBuildSubmittedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBotLocalesCommandInput - {@link ListBotLocalesCommandInput}
 * @returns {@link ListBotLocalesCommandOutput}
 * @see {@link ListBotLocalesCommandInput} for command's `input` shape.
 * @see {@link ListBotLocalesCommandOutput} for command's `response` shape.
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
export class ListBotLocalesCommand extends $Command
  .classBuilder<
    ListBotLocalesCommandInput,
    ListBotLocalesCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "ListBotLocales", {})
  .n("LexModelsV2Client", "ListBotLocalesCommand")
  .f(void 0, void 0)
  .ser(se_ListBotLocalesCommand)
  .de(de_ListBotLocalesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotLocalesRequest;
      output: ListBotLocalesResponse;
    };
    sdk: {
      input: ListBotLocalesCommandInput;
      output: ListBotLocalesCommandOutput;
    };
  };
}
