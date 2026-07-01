// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStackSetOperationsInput, ListStackSetOperationsOutput } from "../models/models_0";
import { ListStackSetOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStackSetOperationsCommand}.
 */
export interface ListStackSetOperationsCommandInput extends ListStackSetOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListStackSetOperationsCommand}.
 */
export interface ListStackSetOperationsCommandOutput extends ListStackSetOperationsOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about operations performed on a StackSet.</p>
 *          <note>
 *             <p>This API provides <i>eventually consistent</i> reads meaning it may take
 *         some time but will eventually return the most up-to-date data.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackSetOperationsInput
 *   StackSetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackSetOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackSetOperationsOutput
 * //   Summaries: [ // StackSetOperationSummaries
 * //     { // StackSetOperationSummary
 * //       OperationId: "STRING_VALUE",
 * //       Action: "CREATE" || "UPDATE" || "DELETE" || "DETECT_DRIFT",
 * //       Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPING" || "STOPPED" || "QUEUED",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       EndTimestamp: new Date("TIMESTAMP"),
 * //       StatusReason: "STRING_VALUE",
 * //       StatusDetails: { // StackSetOperationStatusDetails
 * //         FailedStackInstancesCount: Number("int"),
 * //       },
 * //       OperationPreferences: { // StackSetOperationPreferences
 * //         RegionConcurrencyType: "SEQUENTIAL" || "PARALLEL",
 * //         RegionOrder: [ // RegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         FailureToleranceCount: Number("int"),
 * //         FailureTolerancePercentage: Number("int"),
 * //         MaxConcurrentCount: Number("int"),
 * //         MaxConcurrentPercentage: Number("int"),
 * //         ConcurrencyMode: "STRICT_FAILURE_TOLERANCE" || "SOFT_FAILURE_TOLERANCE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackSetOperationsCommandInput - {@link ListStackSetOperationsCommandInput}
 * @returns {@link ListStackSetOperationsCommandOutput}
 * @see {@link ListStackSetOperationsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
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
export class ListStackSetOperationsCommand extends command<ListStackSetOperationsCommandInput, ListStackSetOperationsCommandOutput>(
  _ep0,
  _mw0,
  "ListStackSetOperations",
  ListStackSetOperations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackSetOperationsInput;
      output: ListStackSetOperationsOutput;
    };
    sdk: {
      input: ListStackSetOperationsCommandInput;
      output: ListStackSetOperationsCommandOutput;
    };
  };
}
