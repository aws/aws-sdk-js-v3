// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStackInstancesInput, CreateStackInstancesOutput } from "../models/models_0";
import { CreateStackInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStackInstancesCommand}.
 */
export interface CreateStackInstancesCommandInput extends CreateStackInstancesInput {}
/**
 * @public
 *
 * The output of {@link CreateStackInstancesCommand}.
 */
export interface CreateStackInstancesCommandOutput extends CreateStackInstancesOutput, __MetadataBearer {}

/**
 * Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either `Accounts` or `DeploymentTargets`, and you must specify at least one value for `Regions`.
 *
 * > **Note:**
 * >
 * > The maximum number of organizational unit (OUs) supported by a `CreateStackInstances` operation is 50.
 * >
 * > If you need more than 50, consider the following options:
 * >
 * > - *Batch processing:* If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each.
 * > - *Parent OU strategy:* If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // CreateStackInstancesInput
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
 * const command = new CreateStackInstancesCommand(input);
 * const response = await client.send(command);
 * // { // CreateStackInstancesOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStackInstancesCommandInput - {@link CreateStackInstancesCommandInput}
 * @returns {@link CreateStackInstancesCommandOutput}
 * @see {@link CreateStackInstancesCommandInput} for command's `input` shape.
 * @see {@link CreateStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The specified operation isn't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The quota for the resource has already been reached.
 *
 * For information about resource and stack limitations, see [CloudFormation quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) in the *CloudFormation User Guide*.
 *
 * @throws {@link OperationIdAlreadyExistsException} (client fault)
 *
 * The specified operation ID already exists.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *
 * Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack set at a given time.
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
export class CreateStackInstancesCommand extends command<CreateStackInstancesCommandInput, CreateStackInstancesCommandOutput>(
  _ep0,
  _mw0,
  "CreateStackInstances",
  CreateStackInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStackInstancesInput;
      output: CreateStackInstancesOutput;
    };
    sdk: {
      input: CreateStackInstancesCommandInput;
      output: CreateStackInstancesCommandOutput;
    };
  };
}
