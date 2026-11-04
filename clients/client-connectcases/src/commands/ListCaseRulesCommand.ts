// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCaseRulesRequest, ListCaseRulesResponse } from "../models/models_0";
import { ListCaseRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see [Add case field conditions to a case template](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-conditions.html).
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class ListCaseRulesCommand extends command<ListCaseRulesCommandInput, ListCaseRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListCaseRules",
  ListCaseRules$
) {
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
