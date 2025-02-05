// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListArchiveRulesRequest, ListArchiveRulesResponse } from "../models/models_0";
import { de_ListArchiveRulesCommand, se_ListArchiveRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArchiveRulesCommand}.
 */
export interface ListArchiveRulesCommandInput extends ListArchiveRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListArchiveRulesCommand}.
 */
export interface ListArchiveRulesCommandOutput extends ListArchiveRulesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListArchiveRulesCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListArchiveRulesCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListArchiveRulesRequest
 *   analyzerName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListArchiveRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListArchiveRulesResponse
 * //   archiveRules: [ // ArchiveRulesList // required
 * //     { // ArchiveRuleSummary
 * //       ruleName: "STRING_VALUE", // required
 * //       filter: { // FilterCriteriaMap // required
 * //         "<keys>": { // Criterion
 * //           eq: [ // ValueList
 * //             "STRING_VALUE",
 * //           ],
 * //           neq: [
 * //             "STRING_VALUE",
 * //           ],
 * //           contains: [
 * //             "STRING_VALUE",
 * //           ],
 * //           exists: true || false,
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArchiveRulesCommandInput - {@link ListArchiveRulesCommandInput}
 * @returns {@link ListArchiveRulesCommandOutput}
 * @see {@link ListArchiveRulesCommandInput} for command's `input` shape.
 * @see {@link ListArchiveRulesCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 * @public
 */
export class ListArchiveRulesCommand extends $Command
  .classBuilder<
    ListArchiveRulesCommandInput,
    ListArchiveRulesCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "ListArchiveRules", {})
  .n("AccessAnalyzerClient", "ListArchiveRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListArchiveRulesCommand)
  .de(de_ListArchiveRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArchiveRulesRequest;
      output: ListArchiveRulesResponse;
    };
    sdk: {
      input: ListArchiveRulesCommandInput;
      output: ListArchiveRulesCommandOutput;
    };
  };
}
