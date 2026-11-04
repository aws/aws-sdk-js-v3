// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIntentPathsRequest, ListIntentPathsResponse } from "../models/models_1";
import { ListIntentPaths$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required:
 *
 * - `startDateTime` and `endDateTime` – Define a time range for which you want to retrieve results.
 * - `intentPath` – Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the `intentPath` field with `/BookCar/BookHotel` to see details about how many times users invoked the `BookCar` and `BookHotel` intents in that order.
 *
 * Use the optional `filters` field to filter the results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListIntentPathsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListIntentPathsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
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
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * Your request couldn't be completed because one or more request fields aren't valid. Check the fields in your request and try again.
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
export class ListIntentPathsCommand extends command<ListIntentPathsCommandInput, ListIntentPathsCommandOutput>(
  _ep0,
  _mw0,
  "ListIntentPaths",
  ListIntentPaths$
) {
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
