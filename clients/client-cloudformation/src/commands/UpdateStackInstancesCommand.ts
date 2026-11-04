// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStackInstancesInput, UpdateStackInstancesOutput } from "../models/models_0";
import { UpdateStackInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.
 *
 * You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use [CreateStackInstances](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html).
 *
 * During StackSet updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value.
 *
 * You can only update the parameter *values* that are specified in the StackSet. To add or delete a parameter itself, use [UpdateStackSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html) to update the StackSet template. If you add a parameter to a template, before you can override the parameter value specified in the StackSet you must first use [UpdateStackSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html) to update all stack instances with the updated template and parameter value specified in the StackSet. Once a stack instance has been updated with the new parameter, you can then override the parameter value using `UpdateStackInstances`.
 *
 * > **Note:**
 * >
 * > The maximum number of organizational unit (OUs) supported by a `UpdateStackInstances` operation is 50.
 * >
 * > If you need more than 50, consider the following options:
 * >
 * > - *Batch processing:* If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each.
 * > - *Parent OU strategy:* If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
 *
 * The specified operation isn't valid.
 *
 * @throws {@link OperationIdAlreadyExistsException} (client fault)
 *
 * The specified operation ID already exists.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *
 * Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack set at a given time.
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *
 * The specified stack instance doesn't exist.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *
 * The specified StackSet doesn't exist.
 *
 * @throws {@link StaleRequestException} (client fault)
 *
 * Another operation has been performed on this StackSet since the specified operation was performed.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class UpdateStackInstancesCommand extends command<UpdateStackInstancesCommandInput, UpdateStackInstancesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStackInstances",
  UpdateStackInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStackInstancesInput;
      output: UpdateStackInstancesOutput;
    };
    sdk: {
      input: UpdateStackInstancesCommandInput;
      output: UpdateStackInstancesCommandOutput;
    };
  };
}
