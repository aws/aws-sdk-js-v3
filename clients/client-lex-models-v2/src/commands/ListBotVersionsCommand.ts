// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBotVersionsRequest, ListBotVersionsResponse } from "../models/models_1";
import { ListBotVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBotVersionsCommand}.
 */
export interface ListBotVersionsCommandInput extends ListBotVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListBotVersionsCommand}.
 */
export interface ListBotVersionsCommandOutput extends ListBotVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all of the versions of a bot.</p>
 *          <p>The <code>ListBotVersions</code> operation returns a summary of each
 *          version of a bot. For example, if a bot has three numbered versions,
 *          the <code>ListBotVersions</code> operation returns for summaries, one
 *          for each numbered version and one for the <code>DRAFT</code>
 *          version.</p>
 *          <p>The <code>ListBotVersions</code> operation always returns at least
 *          one version, the <code>DRAFT</code> version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotVersionsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotVersionsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotVersionsRequest
 *   botId: "STRING_VALUE", // required
 *   sortBy: { // BotVersionSortBy
 *     attribute: "BotVersion", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBotVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBotVersionsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersionSummaries: [ // BotVersionSummaryList
 * //     { // BotVersionSummary
 * //       botName: "STRING_VALUE",
 * //       botVersion: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotVersionsCommandInput - {@link ListBotVersionsCommandInput}
 * @returns {@link ListBotVersionsCommandOutput}
 * @see {@link ListBotVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBotVersionsCommandOutput} for command's `response` shape.
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
export class ListBotVersionsCommand extends command<ListBotVersionsCommandInput, ListBotVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListBotVersions",
  ListBotVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotVersionsRequest;
      output: ListBotVersionsResponse;
    };
    sdk: {
      input: ListBotVersionsCommandInput;
      output: ListBotVersionsCommandOutput;
    };
  };
}
