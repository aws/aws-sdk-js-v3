// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotVersionsRequest, ListBotVersionsResponse } from "../models/models_1";
import { de_ListBotVersionsCommand, se_ListBotVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class ListBotVersionsCommand extends $Command
  .classBuilder<
    ListBotVersionsCommandInput,
    ListBotVersionsCommandOutput,
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
  .s("LexModelBuildingServiceV2", "ListBotVersions", {})
  .n("LexModelsV2Client", "ListBotVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListBotVersionsCommand)
  .de(de_ListBotVersionsCommand)
  .build() {
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
