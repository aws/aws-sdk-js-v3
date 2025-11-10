// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListTestExecutionsRequest, ListTestExecutionsResponse } from "../models/models_1";
import { ListTestExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestExecutionsCommand}.
 */
export interface ListTestExecutionsCommandInput extends ListTestExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestExecutionsCommand}.
 */
export interface ListTestExecutionsCommandOutput extends ListTestExecutionsResponse, __MetadataBearer {}

/**
 * <p>The list of test set executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListTestExecutionsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListTestExecutionsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListTestExecutionsRequest
 *   sortBy: { // TestExecutionSortBy
 *     attribute: "TestSetName" || "CreationDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestExecutionsResponse
 * //   testExecutions: [ // TestExecutionSummaryList
 * //     { // TestExecutionSummary
 * //       testExecutionId: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       testExecutionStatus: "Pending" || "Waiting" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //       testSetId: "STRING_VALUE",
 * //       testSetName: "STRING_VALUE",
 * //       target: { // TestExecutionTarget
 * //         botAliasTarget: { // BotAliasTestExecutionTarget
 * //           botId: "STRING_VALUE", // required
 * //           botAliasId: "STRING_VALUE", // required
 * //           localeId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       apiMode: "Streaming" || "NonStreaming",
 * //       testExecutionModality: "Text" || "Audio",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestExecutionsCommandInput - {@link ListTestExecutionsCommandInput}
 * @returns {@link ListTestExecutionsCommandOutput}
 * @see {@link ListTestExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListTestExecutionsCommandOutput} for command's `response` shape.
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
export class ListTestExecutionsCommand extends $Command
  .classBuilder<
    ListTestExecutionsCommandInput,
    ListTestExecutionsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListTestExecutions", {})
  .n("LexModelsV2Client", "ListTestExecutionsCommand")
  .sc(ListTestExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestExecutionsRequest;
      output: ListTestExecutionsResponse;
    };
    sdk: {
      input: ListTestExecutionsCommandInput;
      output: ListTestExecutionsCommandOutput;
    };
  };
}
