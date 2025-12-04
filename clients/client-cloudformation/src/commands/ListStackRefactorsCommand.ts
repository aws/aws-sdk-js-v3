// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListStackRefactorsInput, ListStackRefactorsOutput } from "../models/models_0";
import { ListStackRefactors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackRefactorsCommand}.
 */
export interface ListStackRefactorsCommandInput extends ListStackRefactorsInput {}
/**
 * @public
 *
 * The output of {@link ListStackRefactorsCommand}.
 */
export interface ListStackRefactorsCommandOutput extends ListStackRefactorsOutput, __MetadataBearer {}

/**
 * <p>Lists all account stack refactor operations and their statuses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackRefactorsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackRefactorsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackRefactorsInput
 *   ExecutionStatusFilter: [ // StackRefactorExecutionStatusFilter
 *     "UNAVAILABLE" || "AVAILABLE" || "OBSOLETE" || "EXECUTE_IN_PROGRESS" || "EXECUTE_COMPLETE" || "EXECUTE_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStackRefactorsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackRefactorsOutput
 * //   StackRefactorSummaries: [ // StackRefactorSummaries // required
 * //     { // StackRefactorSummary
 * //       StackRefactorId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ExecutionStatus: "UNAVAILABLE" || "AVAILABLE" || "OBSOLETE" || "EXECUTE_IN_PROGRESS" || "EXECUTE_COMPLETE" || "EXECUTE_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED",
 * //       ExecutionStatusReason: "STRING_VALUE",
 * //       Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED",
 * //       StatusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackRefactorsCommandInput - {@link ListStackRefactorsCommandInput}
 * @returns {@link ListStackRefactorsCommandOutput}
 * @see {@link ListStackRefactorsCommandInput} for command's `input` shape.
 * @see {@link ListStackRefactorsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListStackRefactorsCommand extends $Command
  .classBuilder<
    ListStackRefactorsCommandInput,
    ListStackRefactorsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ListStackRefactors", {})
  .n("CloudFormationClient", "ListStackRefactorsCommand")
  .sc(ListStackRefactors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackRefactorsInput;
      output: ListStackRefactorsOutput;
    };
    sdk: {
      input: ListStackRefactorsCommandInput;
      output: ListStackRefactorsCommandOutput;
    };
  };
}
