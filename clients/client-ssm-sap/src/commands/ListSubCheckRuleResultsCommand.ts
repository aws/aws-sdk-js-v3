// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSubCheckRuleResultsInput, ListSubCheckRuleResultsOutput } from "../models/models_0";
import { ListSubCheckRuleResults } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubCheckRuleResultsCommand}.
 */
export interface ListSubCheckRuleResultsCommandInput extends ListSubCheckRuleResultsInput {}
/**
 * @public
 *
 * The output of {@link ListSubCheckRuleResultsCommand}.
 */
export interface ListSubCheckRuleResultsCommandOutput extends ListSubCheckRuleResultsOutput, __MetadataBearer {}

/**
 * <p>Lists the rules of a specified sub-check belonging to a configuration check operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListSubCheckRuleResultsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListSubCheckRuleResultsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // ListSubCheckRuleResultsInput
 *   SubCheckResultId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSubCheckRuleResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubCheckRuleResultsOutput
 * //   RuleResults: [ // RuleResultList
 * //     { // RuleResult
 * //       Id: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "PASSED" || "FAILED" || "WARNING" || "INFO" || "UNKNOWN",
 * //       Message: "STRING_VALUE",
 * //       Metadata: { // RuleResultMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubCheckRuleResultsCommandInput - {@link ListSubCheckRuleResultsCommandInput}
 * @returns {@link ListSubCheckRuleResultsCommandOutput}
 * @see {@link ListSubCheckRuleResultsCommandInput} for command's `input` shape.
 * @see {@link ListSubCheckRuleResultsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class ListSubCheckRuleResultsCommand extends $Command
  .classBuilder<
    ListSubCheckRuleResultsCommandInput,
    ListSubCheckRuleResultsCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "ListSubCheckRuleResults", {})
  .n("SsmSapClient", "ListSubCheckRuleResultsCommand")
  .sc(ListSubCheckRuleResults)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubCheckRuleResultsInput;
      output: ListSubCheckRuleResultsOutput;
    };
    sdk: {
      input: ListSubCheckRuleResultsCommandInput;
      output: ListSubCheckRuleResultsCommandOutput;
    };
  };
}
