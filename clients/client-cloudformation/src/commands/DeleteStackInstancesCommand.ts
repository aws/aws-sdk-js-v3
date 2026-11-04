// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStackInstancesInput, DeleteStackInstancesOutput } from "../models/models_0";
import { DeleteStackInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStackInstancesCommand}.
 */
export interface DeleteStackInstancesCommandInput extends DeleteStackInstancesInput {}
/**
 * @public
 *
 * The output of {@link DeleteStackInstancesCommand}.
 */
export interface DeleteStackInstancesCommandOutput extends DeleteStackInstancesOutput, __MetadataBearer {}

/**
 * Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.
 *
 * > **Note:**
 * >
 * > The maximum number of organizational unit (OUs) supported by a `DeleteStackInstances` operation is 50.
 * >
 * > If you need more than 50, consider the following options:
 * >
 * > - *Batch processing:* If you don't want to expose your OU hierarchy, split up the operations into multiple calls with less than 50 OUs each.
 * > - *Parent OU strategy:* If you don't mind exposing the OU hierarchy, target a parent OU that contains all desired child OUs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DeleteStackInstancesInput
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
 *   RetainStacks: true || false, // required
 *   OperationId: "STRING_VALUE",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DeleteStackInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStackInstancesOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteStackInstancesCommandInput - {@link DeleteStackInstancesCommandInput}
 * @returns {@link DeleteStackInstancesCommandOutput}
 * @see {@link DeleteStackInstancesCommandInput} for command's `input` shape.
 * @see {@link DeleteStackInstancesCommandOutput} for command's `response` shape.
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
export class DeleteStackInstancesCommand extends command<DeleteStackInstancesCommandInput, DeleteStackInstancesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStackInstances",
  DeleteStackInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStackInstancesInput;
      output: DeleteStackInstancesOutput;
    };
    sdk: {
      input: DeleteStackInstancesCommandInput;
      output: DeleteStackInstancesCommandOutput;
    };
  };
}
