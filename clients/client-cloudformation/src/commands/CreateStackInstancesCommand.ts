// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStackInstancesInput, CreateStackInstancesOutput } from "../models/models_0";
import { de_CreateStackInstancesCommand, se_CreateStackInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A
 *       stack instance refers to a stack in a specific account and Region. You must specify at least
 *       one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must
 *       specify at least one value for <code>Regions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
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
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 *
 * @throws {@link OperationIdAlreadyExistsException} (client fault)
 *  <p>The specified operation ID already exists.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack
 *    set at a given time.</p>
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
export class CreateStackInstancesCommand extends $Command
  .classBuilder<
    CreateStackInstancesCommandInput,
    CreateStackInstancesCommandOutput,
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
  .s("CloudFormation", "CreateStackInstances", {})
  .n("CloudFormationClient", "CreateStackInstancesCommand")
  .f(void 0, void 0)
  .ser(se_CreateStackInstancesCommand)
  .de(de_CreateStackInstancesCommand)
  .build() {
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
