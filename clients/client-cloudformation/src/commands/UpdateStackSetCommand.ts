// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStackSetInput, UpdateStackSetOutput } from "../models/models_1";
import { de_UpdateStackSetCommand, se_UpdateStackSetCommand } from "../protocols/Aws_query";

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
 * <p>Updates the stack set, and associated stack instances in the specified accounts and
 *       Amazon Web Services Regions.</p>
 *          <p>Even if the stack set operation created by updating the stack set fails (completely or
 *       partially, below or above a specified failure tolerance), the stack set is updated with your
 *       changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set
 *       use the updated stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
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
 *  <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack
 *    set at a given time.</p>
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *  <p>The specified stack instance doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link StaleRequestException} (client fault)
 *  <p>Another operation has been performed on this stack set since the specified operation was performed.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "UpdateStackSet", {})
  .n("CloudFormationClient", "UpdateStackSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStackSetCommand)
  .de(de_UpdateStackSetCommand)
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
