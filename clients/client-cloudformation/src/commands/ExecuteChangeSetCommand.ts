// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteChangeSetInput, ExecuteChangeSetOutput } from "../models/models_0";
import { ExecuteChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the DescribeStacks action to view the status of the update.
 *
 * When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.
 *
 * If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.
 *
 * To create a change set for the entire stack hierarchy, `IncludeNestedStacks` must have been set to `True`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ExecuteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ExecuteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
 *
 * The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the `ListChangeSets` operation.
 *
 * @throws {@link InsufficientCapabilitiesException} (client fault)
 *
 * The template contains resources with capabilities that weren't specified in the Capabilities parameter.
 *
 * @throws {@link InvalidChangeSetStatusException} (client fault)
 *
 * The specified change set can't be used to update the stack. For example, the change set status might be `CREATE_IN_PROGRESS`, or the stack status might be `UPDATE_IN_PROGRESS`.
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *
 * A client request token already exists.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class ExecuteChangeSetCommand extends command<ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteChangeSet",
  ExecuteChangeSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteChangeSetInput;
      output: {};
    };
    sdk: {
      input: ExecuteChangeSetCommandInput;
      output: ExecuteChangeSetCommandOutput;
    };
  };
}
