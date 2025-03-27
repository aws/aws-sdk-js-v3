// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListHookResultsInput, ListHookResultsOutput } from "../models/models_0";
import { de_ListHookResultsCommand, se_ListHookResultsCommand } from "../protocols/Aws_query";

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
 * <p>Returns summaries of invoked Hooks when a change set or Cloud Control API operation target is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListHookResultsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListHookResultsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListHookResultsInput
 *   TargetType: "CHANGE_SET" || "STACK" || "RESOURCE" || "CLOUD_CONTROL", // required
 *   TargetId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHookResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListHookResultsOutput
 * //   TargetType: "CHANGE_SET" || "STACK" || "RESOURCE" || "CLOUD_CONTROL",
 * //   TargetId: "STRING_VALUE",
 * //   HookResults: [ // HookResultSummaries
 * //     { // HookResultSummary
 * //       InvocationPoint: "PRE_PROVISION",
 * //       FailureMode: "FAIL" || "WARN",
 * //       TypeName: "STRING_VALUE",
 * //       TypeVersionId: "STRING_VALUE",
 * //       TypeConfigurationVersionId: "STRING_VALUE",
 * //       Status: "HOOK_IN_PROGRESS" || "HOOK_COMPLETE_SUCCEEDED" || "HOOK_COMPLETE_FAILED" || "HOOK_FAILED",
 * //       HookStatusReason: "STRING_VALUE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListHookResults", {})
  .n("CloudFormationClient", "ListHookResultsCommand")
  .f(void 0, void 0)
  .ser(se_ListHookResultsCommand)
  .de(de_ListHookResultsCommand)
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
