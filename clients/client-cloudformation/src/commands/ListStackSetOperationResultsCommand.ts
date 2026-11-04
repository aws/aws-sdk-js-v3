// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStackSetOperationResultsInput, ListStackSetOperationResultsOutput } from "../models/models_0";
import { ListStackSetOperationResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListStackSetOperationResultsCommandOutput extends ListStackSetOperationResultsOutput, __MetadataBearer {}

/**
 * Returns summary information about the results of a StackSet operation.
 *
 * > **Note:** This API provides *eventually consistent* reads meaning it may take some time but will eventually return the most up-to-date data.
 *
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
 *
 * The specified ID refers to an operation that doesn't exist.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *
 * The specified StackSet doesn't exist.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class ListStackSetOperationResultsCommand extends command<ListStackSetOperationResultsCommandInput, ListStackSetOperationResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListStackSetOperationResults",
  ListStackSetOperationResults$
) {
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
