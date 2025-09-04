// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackSetOperationsInput, ListStackSetOperationsOutput } from "../models/models_0";
import { de_ListStackSetOperationsCommand, se_ListStackSetOperationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class ListStackSetOperationsCommand extends $Command
  .classBuilder<
    ListStackSetOperationsCommandInput,
    ListStackSetOperationsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListStackSetOperations", {})
  .n("CloudFormationClient", "ListStackSetOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListStackSetOperationsCommand)
  .de(de_ListStackSetOperationsCommand)
  .build() {
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
