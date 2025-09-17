// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportStacksToStackSetInput, ImportStacksToStackSetOutput } from "../models/models_0";
import { de_ImportStacksToStackSetCommand, se_ImportStacksToStackSetCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportStacksToStackSetCommand}.
 */
export interface ImportStacksToStackSetCommandInput extends ImportStacksToStackSetInput {}
/**
 * @public
 *
 * The output of {@link ImportStacksToStackSetCommand}.
 */
export interface ImportStacksToStackSetCommandOutput extends ImportStacksToStackSetOutput, __MetadataBearer {}

/**
 * <p>Import existing stacks into a new StackSets. Use the stack import operation to import up
 *       to 10 stacks into a new StackSet in the same account as the source stack or in a different
 *       administrator account and Region, by specifying the stack ID of the stack you intend to
 *       import.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ImportStacksToStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ImportStacksToStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ImportStacksToStackSetInput
 *   StackSetName: "STRING_VALUE", // required
 *   StackIds: [ // StackIdList
 *     "STRING_VALUE",
 *   ],
 *   StackIdsUrl: "STRING_VALUE",
 *   OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *     "STRING_VALUE",
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
 *   OperationId: "STRING_VALUE",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ImportStacksToStackSetCommand(input);
 * const response = await client.send(command);
 * // { // ImportStacksToStackSetOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportStacksToStackSetCommandInput - {@link ImportStacksToStackSetCommandInput}
 * @returns {@link ImportStacksToStackSetCommandOutput}
 * @see {@link ImportStacksToStackSetCommandInput} for command's `input` shape.
 * @see {@link ImportStacksToStackSetCommandOutput} for command's `response` shape.
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
 *  <p>Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack
 *    set at a given time.</p>
 *
 * @throws {@link StackNotFoundException} (client fault)
 *  <p>The specified stack ARN doesn't exist or stack doesn't exist corresponding to the ARN in input.</p>
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
export class ImportStacksToStackSetCommand extends $Command
  .classBuilder<
    ImportStacksToStackSetCommandInput,
    ImportStacksToStackSetCommandOutput,
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
  .s("CloudFormation", "ImportStacksToStackSet", {})
  .n("CloudFormationClient", "ImportStacksToStackSetCommand")
  .f(void 0, void 0)
  .ser(se_ImportStacksToStackSetCommand)
  .de(de_ImportStacksToStackSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportStacksToStackSetInput;
      output: ImportStacksToStackSetOutput;
    };
    sdk: {
      input: ImportStacksToStackSetCommandInput;
      output: ImportStacksToStackSetCommandOutput;
    };
  };
}
