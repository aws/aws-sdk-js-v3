// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListIntentPathsRequest, ListIntentPathsResponse } from "../models/models_1";
import { de_ListIntentPathsCommand, se_ListIntentPathsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntentPathsCommand}.
 */
export interface ListIntentPathsCommandInput extends ListIntentPathsRequest {}
/**
 * @public
 *
 * The output of {@link ListIntentPathsCommand}.
 */
export interface ListIntentPathsCommandOutput extends ListIntentPathsResponse, __MetadataBearer {}

/**
 * <p>Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>intentPath</code> – Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the <code>intentPath</code> field with <code>/BookCar/BookHotel</code> to see details about how many times users invoked the <code>BookCar</code> and <code>BookHotel</code> intents in that order.</p>
 *             </li>
 *          </ul>
 *          <p>Use the optional <code>filters</code> field to filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListIntentPathsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListIntentPathsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListIntentPathsRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   intentPath: "STRING_VALUE", // required
 *   filters: [ // AnalyticsPathFilters
 *     { // AnalyticsPathFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListIntentPathsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntentPathsResponse
 * //   nodeSummaries: [ // AnalyticsIntentNodeSummaries
 * //     { // AnalyticsIntentNodeSummary
 * //       intentName: "STRING_VALUE",
 * //       intentPath: "STRING_VALUE",
 * //       intentCount: Number("int"),
 * //       intentLevel: Number("int"),
 * //       nodeType: "Inner" || "Exit",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIntentPathsCommandInput - {@link ListIntentPathsCommandInput}
 * @returns {@link ListIntentPathsCommandOutput}
 * @see {@link ListIntentPathsCommandInput} for command's `input` shape.
 * @see {@link ListIntentPathsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
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
export class ListIntentPathsCommand extends $Command
  .classBuilder<
    ListIntentPathsCommandInput,
    ListIntentPathsCommandOutput,
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
  .s("LexModelBuildingServiceV2", "ListIntentPaths", {})
  .n("LexModelsV2Client", "ListIntentPathsCommand")
  .f(void 0, void 0)
  .ser(se_ListIntentPathsCommand)
  .de(de_ListIntentPathsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntentPathsRequest;
      output: ListIntentPathsResponse;
    };
    sdk: {
      input: ListIntentPathsCommandInput;
      output: ListIntentPathsCommandOutput;
    };
  };
}
