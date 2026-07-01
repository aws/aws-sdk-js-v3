// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeChangeSetHooksInput, DescribeChangeSetHooksOutput } from "../models/models_0";
import { DescribeChangeSetHooks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeChangeSetHooksCommand}.
 */
export interface DescribeChangeSetHooksCommandInput extends DescribeChangeSetHooksInput {}
/**
 * @public
 *
 * The output of {@link DescribeChangeSetHooksCommand}.
 */
export interface DescribeChangeSetHooksCommandOutput extends DescribeChangeSetHooksOutput, __MetadataBearer {}

/**
 * <p>Returns Hook-related information for the change set and a list of changes that
 *       CloudFormation makes when you run the change set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeChangeSetHooksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeChangeSetHooksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeChangeSetHooksInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   LogicalResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeChangeSetHooksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChangeSetHooksOutput
 * //   ChangeSetId: "STRING_VALUE",
 * //   ChangeSetName: "STRING_VALUE",
 * //   Hooks: [ // ChangeSetHooks
 * //     { // ChangeSetHook
 * //       InvocationPoint: "PRE_PROVISION",
 * //       FailureMode: "FAIL" || "WARN",
 * //       TypeName: "STRING_VALUE",
 * //       TypeVersionId: "STRING_VALUE",
 * //       TypeConfigurationVersionId: "STRING_VALUE",
 * //       TargetDetails: { // ChangeSetHookTargetDetails
 * //         TargetType: "RESOURCE",
 * //         ResourceTargetDetails: { // ChangeSetHookResourceTargetDetails
 * //           LogicalResourceId: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceAction: "Add" || "Modify" || "Remove" || "Import" || "Dynamic" || "SyncWithActual",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Status: "PLANNING" || "PLANNED" || "UNAVAILABLE",
 * //   NextToken: "STRING_VALUE",
 * //   StackId: "STRING_VALUE",
 * //   StackName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeChangeSetHooksCommandInput - {@link DescribeChangeSetHooksCommandInput}
 * @returns {@link DescribeChangeSetHooksCommandOutput}
 * @see {@link DescribeChangeSetHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetHooksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *    <code>ListChangeSets</code> operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeChangeSetHooksCommand extends command<DescribeChangeSetHooksCommandInput, DescribeChangeSetHooksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChangeSetHooks",
  DescribeChangeSetHooks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChangeSetHooksInput;
      output: DescribeChangeSetHooksOutput;
    };
    sdk: {
      input: DescribeChangeSetHooksCommandInput;
      output: DescribeChangeSetHooksCommandOutput;
    };
  };
}
