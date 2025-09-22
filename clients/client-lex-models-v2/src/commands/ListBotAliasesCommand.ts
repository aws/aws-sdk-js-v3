// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotAliasesRequest, ListBotAliasesResponse } from "../models/models_1";
import { ListBotAliases } from "../schemas/schemas_9_Bot";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotAliasesCommand}.
 */
export interface ListBotAliasesCommandInput extends ListBotAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListBotAliasesCommand}.
 */
export interface ListBotAliasesCommandOutput extends ListBotAliasesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of aliases for the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotAliasesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotAliasesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotAliasesRequest
 *   botId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBotAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListBotAliasesResponse
 * //   botAliasSummaries: [ // BotAliasSummaryList
 * //     { // BotAliasSummary
 * //       botAliasId: "STRING_VALUE",
 * //       botAliasName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       botVersion: "STRING_VALUE",
 * //       botAliasStatus: "Creating" || "Available" || "Deleting" || "Failed",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   botId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotAliasesCommandInput - {@link ListBotAliasesCommandInput}
 * @returns {@link ListBotAliasesCommandOutput}
 * @see {@link ListBotAliasesCommandInput} for command's `input` shape.
 * @see {@link ListBotAliasesCommandOutput} for command's `response` shape.
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
export class ListBotAliasesCommand extends $Command
  .classBuilder<
    ListBotAliasesCommandInput,
    ListBotAliasesCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListBotAliases", {})
  .n("LexModelsV2Client", "ListBotAliasesCommand")
  .sc(ListBotAliases)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotAliasesRequest;
      output: ListBotAliasesResponse;
    };
    sdk: {
      input: ListBotAliasesCommandInput;
      output: ListBotAliasesCommandOutput;
    };
  };
}
