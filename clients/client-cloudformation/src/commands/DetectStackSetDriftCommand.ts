// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetectStackSetDriftInput, DetectStackSetDriftOutput } from "../models/models_0";
import { de_DetectStackSetDriftCommand, se_DetectStackSetDriftCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectStackSetDriftCommand}.
 */
export interface DetectStackSetDriftCommandInput extends DetectStackSetDriftInput {}
/**
 * @public
 *
 * The output of {@link DetectStackSetDriftCommand}.
 */
export interface DetectStackSetDriftCommandOutput extends DetectStackSetDriftOutput, __MetadataBearer {}

/**
 * <p>Detect drift on a StackSet. When CloudFormation performs drift detection on a StackSet, it
 *       performs drift detection on the stack associated with each stack instance in the StackSet. For
 *       more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Performing drift detection on
 *         CloudFormation StackSets</a>.</p>
 *          <p>
 *             <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the StackSet
 *       drift detection operation. Use this operation id with <a>DescribeStackSetOperation</a> to monitor the progress of the drift detection
 *       operation. The drift detection operation may take some time, depending on the number of stack
 *       instances included in the StackSet, in addition to the number of resources included in each
 *       stack.</p>
 *          <p>Once the operation has completed, use the following actions to return drift
 *       information:</p>
 *          <ul>
 *             <li>
 *                <p>Use <a>DescribeStackSet</a> to return detailed information about the stack
 *           set, including detailed information about the last <i>completed</i> drift
 *           operation performed on the StackSet. (Information about drift operations that are in
 *           progress isn't included.)</p>
 *             </li>
 *             <li>
 *                <p>Use <a>ListStackInstances</a> to return a list of stack instances belonging
 *           to the StackSet, including the drift status and last drift time checked of each
 *           instance.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>DescribeStackInstance</a> to return detailed information about a
 *           specific stack instance, including its drift status and last drift time checked.</p>
 *             </li>
 *          </ul>
 *          <p>You can only run a single drift detection operation on a given StackSet at one
 *       time.</p>
 *          <p>To stop a drift detection StackSet operation, use <a>StopStackSetOperation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackSetDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackSetDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DetectStackSetDriftInput
 *   StackSetName: "STRING_VALUE", // required
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
 * const command = new DetectStackSetDriftCommand(input);
 * const response = await client.send(command);
 * // { // DetectStackSetDriftOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetectStackSetDriftCommandInput - {@link DetectStackSetDriftCommandInput}
 * @returns {@link DetectStackSetDriftCommandOutput}
 * @see {@link DetectStackSetDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackSetDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack
 *    set at a given time.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified StackSet doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DetectStackSetDriftCommand extends $Command
  .classBuilder<
    DetectStackSetDriftCommandInput,
    DetectStackSetDriftCommandOutput,
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
  .s("CloudFormation", "DetectStackSetDrift", {})
  .n("CloudFormationClient", "DetectStackSetDriftCommand")
  .f(void 0, void 0)
  .ser(se_DetectStackSetDriftCommand)
  .de(de_DetectStackSetDriftCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectStackSetDriftInput;
      output: DetectStackSetDriftOutput;
    };
    sdk: {
      input: DetectStackSetDriftCommandInput;
      output: DetectStackSetDriftCommandOutput;
    };
  };
}
