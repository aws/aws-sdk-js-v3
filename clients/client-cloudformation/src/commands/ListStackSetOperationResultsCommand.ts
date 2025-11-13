// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackSetOperationResultsInput, ListStackSetOperationResultsOutput } from "../models/models_1";
import { ListStackSetOperationResults } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackSetOperationResultsCommand}.
 */
export interface ListStackSetOperationResultsCommandInput extends ListStackSetOperationResultsInput {}
/**
 * @public
 *
 * The output of {@link ListStackSetOperationResultsCommand}.
 */
export interface ListStackSetOperationResultsCommandOutput
  extends ListStackSetOperationResultsOutput,
    __MetadataBearer {}

/**
 * <p>Returns summary information about the results of a StackSet operation.</p>
 *          <note>
 *             <p>This API provides <i>eventually consistent</i> reads meaning it may take
 *         some time but will eventually return the most up-to-date data.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationResultsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationResultsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackSetOperationResultsInput
 *   StackSetName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 *   Filters: [ // OperationResultFilters
 *     { // OperationResultFilter
 *       Name: "OPERATION_RESULT_STATUS",
 *       Values: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ListStackSetOperationResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackSetOperationResultsOutput
 * //   Summaries: [ // StackSetOperationResultSummaries
 * //     { // StackSetOperationResultSummary
 * //       Account: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Status: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 * //       StatusReason: "STRING_VALUE",
 * //       AccountGateResult: { // AccountGateResult
 * //         Status: "SUCCEEDED" || "FAILED" || "SKIPPED",
 * //         StatusReason: "STRING_VALUE",
 * //       },
 * //       OrganizationalUnitId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackSetOperationResultsCommandInput - {@link ListStackSetOperationResultsCommandInput}
 * @returns {@link ListStackSetOperationResultsCommandOutput}
 * @see {@link ListStackSetOperationResultsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified StackSet doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListStackSetOperationResultsCommand extends $Command
  .classBuilder<
    ListStackSetOperationResultsCommandInput,
    ListStackSetOperationResultsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ListStackSetOperationResults", {})
  .n("CloudFormationClient", "ListStackSetOperationResultsCommand")
  .sc(ListStackSetOperationResults)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackSetOperationResultsInput;
      output: ListStackSetOperationResultsOutput;
    };
    sdk: {
      input: ListStackSetOperationResultsCommandInput;
      output: ListStackSetOperationResultsCommandOutput;
    };
  };
}
