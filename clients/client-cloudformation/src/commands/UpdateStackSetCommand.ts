// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStackSetInput, UpdateStackSetOutput } from "../models/models_0";
import { UpdateStackSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStackSetCommand}.
 */
export interface UpdateStackSetCommandInput extends UpdateStackSetInput {}
/**
 * @public
 *
 * The output of {@link UpdateStackSetCommand}.
 */
export interface UpdateStackSetCommandOutput extends UpdateStackSetOutput, __MetadataBearer {}

/**
 * <p>Updates the StackSet and associated stack instances in the specified accounts and
 *       Amazon Web Services Regions.</p>
 *          <p>Even if the StackSet operation created by updating the StackSet fails (completely or
 *       partially, below or above a specified failure tolerance), the StackSet is updated with your
 *       changes. Subsequent <a>CreateStackInstances</a> calls on the specified StackSet use
 *       the updated StackSet.</p>
 *          <note>
 *             <p>The maximum number of organizational unit (OUs) supported by a
 *           <code>UpdateStackSet</code> operation is 50.</p>
 *             <p>If you need more than 50, consider the following options:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <i>Batch processing:</i> If you don't want to expose your OU
 *             hierarchy, split up the operations into multiple calls with less than 50 OUs
 *             each.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <i>Parent OU strategy:</i> If you don't mind exposing the OU
 *             hierarchy, target a parent OU that contains all desired child OUs.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // UpdateStackSetInput
 *   StackSetName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 *   UsePreviousTemplate: true || false,
 *   Parameters: [ // Parameters
 *     { // Parameter
 *       ParameterKey: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *       ResolvedValue: "STRING_VALUE",
 *     },
 *   ],
 *   Capabilities: [ // Capabilities
 *     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   OperationPreferences: { // StackSetOperationPreferences
 *     RegionConcurrencyType: "SEQUENTIAL" || "PARALLEL",
 *     RegionOrder: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *     FailureToleranceCount: Number("int"),
 *     FailureTolerancePercentage: Number("int"),
 *     MaxConcurrentCount: Number("int"),
 *     MaxConcurrentPercentage: Number("int"),
 *     ConcurrencyMode: "STRICT_FAILURE_TOLERANCE" || "SOFT_FAILURE_TOLERANCE",
 *   },
 *   AdministrationRoleARN: "STRING_VALUE",
 *   ExecutionRoleName: "STRING_VALUE",
 *   DeploymentTargets: { // DeploymentTargets
 *     Accounts: [ // AccountList
 *       "STRING_VALUE",
 *     ],
 *     AccountsUrl: "STRING_VALUE",
 *     OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *       "STRING_VALUE",
 *     ],
 *     AccountFilterType: "NONE" || "INTERSECTION" || "DIFFERENCE" || "UNION",
 *   },
 *   PermissionModel: "SERVICE_MANAGED" || "SELF_MANAGED",
 *   AutoDeployment: { // AutoDeployment
 *     Enabled: true || false,
 *     RetainStacksOnAccountRemoval: true || false,
 *   },
 *   OperationId: "STRING_VALUE",
 *   Accounts: [
 *     "STRING_VALUE",
 *   ],
 *   Regions: [
 *     "STRING_VALUE",
 *   ],
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 *   ManagedExecution: { // ManagedExecution
 *     Active: true || false,
 *   },
 * };
 * const command = new UpdateStackSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStackSetOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStackSetCommandInput - {@link UpdateStackSetCommandInput}
 * @returns {@link UpdateStackSetCommandOutput}
 * @see {@link UpdateStackSetCommandInput} for command's `input` shape.
 * @see {@link UpdateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationIdAlreadyExistsException} (client fault)
 *  <p>The specified operation ID already exists.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack
 *    set at a given time.</p>
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *  <p>The specified stack instance doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified StackSet doesn't exist.</p>
 *
 * @throws {@link StaleRequestException} (client fault)
 *  <p>Another operation has been performed on this StackSet since the specified operation was performed.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class UpdateStackSetCommand extends $Command
  .classBuilder<
    UpdateStackSetCommandInput,
    UpdateStackSetCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "UpdateStackSet", {})
  .n("CloudFormationClient", "UpdateStackSetCommand")
  .sc(UpdateStackSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStackSetInput;
      output: UpdateStackSetOutput;
    };
    sdk: {
      input: UpdateStackSetCommandInput;
      output: UpdateStackSetCommandOutput;
    };
  };
}
