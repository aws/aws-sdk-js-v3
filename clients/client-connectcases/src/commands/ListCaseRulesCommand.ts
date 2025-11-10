// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCaseRulesRequest, ListCaseRulesResponse } from "../models/models_0";
import { ListCaseRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCaseRulesCommand}.
 */
export interface ListCaseRulesCommandInput extends ListCaseRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListCaseRulesCommand}.
 */
export interface ListCaseRulesCommandOutput extends ListCaseRulesResponse, __MetadataBearer {}

/**
 * <p>Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as <i>case field conditions</i>. For more information about case field conditions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html">Add case field conditions to a case template</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, ListCaseRulesCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, ListCaseRulesCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // ListCaseRulesRequest
 *   domainId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCaseRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListCaseRulesResponse
 * //   caseRules: [ // CaseRuleSummaryList // required
 * //     { // CaseRuleSummary
 * //       caseRuleId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       caseRuleArn: "STRING_VALUE", // required
 * //       ruleType: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCaseRulesCommandInput - {@link ListCaseRulesCommandInput}
 * @returns {@link ListCaseRulesCommandOutput}
 * @see {@link ListCaseRulesCommandInput} for command's `input` shape.
 * @see {@link ListCaseRulesCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class ListCaseRulesCommand extends $Command
  .classBuilder<
    ListCaseRulesCommandInput,
    ListCaseRulesCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "ListCaseRules", {})
  .n("ConnectCasesClient", "ListCaseRulesCommand")
  .sc(ListCaseRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCaseRulesRequest;
      output: ListCaseRulesResponse;
    };
    sdk: {
      input: ListCaseRulesCommandInput;
      output: ListCaseRulesCommandOutput;
    };
  };
}
