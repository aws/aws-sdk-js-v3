// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStackInstancesInput, UpdateStackInstancesOutput } from "../models/models_1";
import { de_UpdateStackInstancesCommand, se_UpdateStackInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStackInstancesCommand}.
 */
export interface UpdateStackInstancesCommandInput extends UpdateStackInstancesInput {}
/**
 * @public
 *
 * The output of {@link UpdateStackInstancesCommand}.
 */
export interface UpdateStackInstancesCommandOutput extends UpdateStackInstancesOutput, __MetadataBearer {}

/**
 * <p>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.</p>
 *          <p>You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to
 *    create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p>
 *          <p>During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their
 *    overridden value.</p>
 *          <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or
 *    delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set
 *    template. If you add a parameter to a template, before you can override the parameter value specified in the stack
 *    set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack
 *    instances with the updated template and parameter value specified in the stack set. Once a stack instance has been
 *    updated with the new parameter, you can then override the parameter value using
 *    <code>UpdateStackInstances</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // UpdateStackInstancesInput
 *   StackSetName: "STRING_VALUE", // required
 *   Accounts: [ // AccountList
 *     "STRING_VALUE",
 *   ],
 *   DeploymentTargets: { // DeploymentTargets
 *     Accounts: [
 *       "STRING_VALUE",
 *     ],
 *     AccountsUrl: "STRING_VALUE",
 *     OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *       "STRING_VALUE",
 *     ],
 *     AccountFilterType: "NONE" || "INTERSECTION" || "DIFFERENCE" || "UNION",
 *   },
 *   Regions: [ // RegionList // required
 *     "STRING_VALUE",
 *   ],
 *   ParameterOverrides: [ // Parameters
 *     { // Parameter
 *       ParameterKey: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *       ResolvedValue: "STRING_VALUE",
 *     },
 *   ],
 *   OperationPreferences: { // StackSetOperationPreferences
 *     RegionConcurrencyType: "SEQUENTIAL" || "PARALLEL",
 *     RegionOrder: [
 *       "STRING_VALUE",
 *     ],
 *     FailureToleranceCount: Number("int"),
 *     FailureTolerancePercentage: Number("int"),
 *     MaxConcurrentCount: Number("int"),
 *     MaxConcurrentPercentage: Number("int"),
 *     ConcurrencyMode: "STRICT_FAILURE_TOLERANCE" || "SOFT_FAILURE_TOLERANCE",
 *   },
 *   OperationId: "STRING_VALUE",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new UpdateStackInstancesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStackInstancesOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStackInstancesCommandInput - {@link UpdateStackInstancesCommandInput}
 * @returns {@link UpdateStackInstancesCommandOutput}
 * @see {@link UpdateStackInstancesCommandInput} for command's `input` shape.
 * @see {@link UpdateStackInstancesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateStackInstancesCommand extends $Command
  .classBuilder<
    UpdateStackInstancesCommandInput,
    UpdateStackInstancesCommandOutput,
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
  .s("CloudFormation", "UpdateStackInstances", {})
  .n("CloudFormationClient", "UpdateStackInstancesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStackInstancesCommand)
  .de(de_UpdateStackInstancesCommand)
  .build() {}
