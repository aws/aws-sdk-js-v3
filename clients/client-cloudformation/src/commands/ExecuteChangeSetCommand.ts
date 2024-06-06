// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteChangeSetInput, ExecuteChangeSetOutput } from "../models/models_0";
import { de_ExecuteChangeSetCommand, se_ExecuteChangeSetCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteChangeSetCommand}.
 */
export interface ExecuteChangeSetCommandInput extends ExecuteChangeSetInput {}
/**
 * @public
 *
 * The output of {@link ExecuteChangeSetCommand}.
 */
export interface ExecuteChangeSetCommandOutput extends ExecuteChangeSetOutput, __MetadataBearer {}

/**
 * <p>Updates a stack using the input information that was provided when the specified change set was created. After
 *    the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to
 *    view the status of the update.</p>
 *          <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't
 *    valid for the updated stack.</p>
 *          <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a
 *    temporary stack policy that overrides the current policy.</p>
 *          <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to
 *    <code>True</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ExecuteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ExecuteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ExecuteChangeSetInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   DisableRollback: true || false,
 *   RetainExceptOnCreate: true || false,
 * };
 * const command = new ExecuteChangeSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecuteChangeSetCommandInput - {@link ExecuteChangeSetCommandInput}
 * @returns {@link ExecuteChangeSetCommandOutput}
 * @see {@link ExecuteChangeSetCommandInput} for command's `input` shape.
 * @see {@link ExecuteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *    <code>ListChangeSets</code> operation.</p>
 *
 * @throws {@link InsufficientCapabilitiesException} (client fault)
 *  <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
 *
 * @throws {@link InvalidChangeSetStatusException} (client fault)
 *  <p>The specified change set can't be used to update the stack. For example, the change set status might be
 *    <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *  <p>A client request token already exists.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class ExecuteChangeSetCommand extends $Command
  .classBuilder<
    ExecuteChangeSetCommandInput,
    ExecuteChangeSetCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ExecuteChangeSet", {})
  .n("CloudFormationClient", "ExecuteChangeSetCommand")
  .f(void 0, void 0)
  .ser(se_ExecuteChangeSetCommand)
  .de(de_ExecuteChangeSetCommand)
  .build() {}
