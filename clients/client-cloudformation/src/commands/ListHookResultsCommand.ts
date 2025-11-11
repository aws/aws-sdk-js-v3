// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListHookResultsInput, ListHookResultsOutput } from "../models/models_0";
import { ListHookResults } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHookResultsCommand}.
 */
export interface ListHookResultsCommandInput extends ListHookResultsInput {}
/**
 * @public
 *
 * The output of {@link ListHookResultsCommand}.
 */
export interface ListHookResultsCommandOutput extends ListHookResultsOutput, __MetadataBearer {}

/**
 * <p>Returns summaries of invoked Hooks. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-view-invocations.html">View invocation
 *         summaries for CloudFormation Hooks</a> in the <i>CloudFormation Hooks User Guide</i>.</p>
 *          <p>This operation supports the following parameter combinations:</p>
 *          <ul>
 *             <li>
 *                <p>No parameters: Returns all Hook invocation summaries.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TypeArn</code> only: Returns summaries for a specific Hook.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TypeArn</code> and <code>Status</code>: Returns summaries for a specific
 *           Hook filtered by status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TargetId</code> and <code>TargetType</code>: Returns summaries for a specific
 *           Hook invocation target.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListHookResultsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListHookResultsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListHookResultsInput
 *   TargetType: "CHANGE_SET" || "STACK" || "RESOURCE" || "CLOUD_CONTROL",
 *   TargetId: "STRING_VALUE",
 *   TypeArn: "STRING_VALUE",
 *   Status: "HOOK_IN_PROGRESS" || "HOOK_COMPLETE_SUCCEEDED" || "HOOK_COMPLETE_FAILED" || "HOOK_FAILED",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHookResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListHookResultsOutput
 * //   TargetType: "CHANGE_SET" || "STACK" || "RESOURCE" || "CLOUD_CONTROL",
 * //   TargetId: "STRING_VALUE",
 * //   HookResults: [ // HookResultSummaries
 * //     { // HookResultSummary
 * //       HookResultId: "STRING_VALUE",
 * //       InvocationPoint: "PRE_PROVISION",
 * //       FailureMode: "FAIL" || "WARN",
 * //       TypeName: "STRING_VALUE",
 * //       TypeVersionId: "STRING_VALUE",
 * //       TypeConfigurationVersionId: "STRING_VALUE",
 * //       Status: "HOOK_IN_PROGRESS" || "HOOK_COMPLETE_SUCCEEDED" || "HOOK_COMPLETE_FAILED" || "HOOK_FAILED",
 * //       HookStatusReason: "STRING_VALUE",
 * //       InvokedAt: new Date("TIMESTAMP"),
 * //       TargetType: "CHANGE_SET" || "STACK" || "RESOURCE" || "CLOUD_CONTROL",
 * //       TargetId: "STRING_VALUE",
 * //       TypeArn: "STRING_VALUE",
 * //       HookExecutionTarget: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHookResultsCommandInput - {@link ListHookResultsCommandInput}
 * @returns {@link ListHookResultsCommandOutput}
 * @see {@link ListHookResultsCommandInput} for command's `input` shape.
 * @see {@link ListHookResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link HookResultNotFoundException} (client fault)
 *  <p>The specified target doesn't have any requested Hook invocations.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListHookResultsCommand extends $Command
  .classBuilder<
    ListHookResultsCommandInput,
    ListHookResultsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ListHookResults", {})
  .n("CloudFormationClient", "ListHookResultsCommand")
  .sc(ListHookResults)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHookResultsInput;
      output: ListHookResultsOutput;
    };
    sdk: {
      input: ListHookResultsCommandInput;
      output: ListHookResultsCommandOutput;
    };
  };
}
