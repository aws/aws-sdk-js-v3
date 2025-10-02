// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetectStackDriftInput, DetectStackDriftOutput } from "../models/models_0";
import { de_DetectStackDriftCommand, se_DetectStackDriftCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectStackDriftCommand}.
 */
export interface DetectStackDriftCommandInput extends DetectStackDriftInput {}
/**
 * @public
 *
 * The output of {@link DetectStackDriftCommand}.
 */
export interface DetectStackDriftCommandOutput extends DetectStackDriftOutput, __MetadataBearer {}

/**
 * <p>Detects whether a stack's actual configuration differs, or has
 *         <i>drifted</i>, from its expected configuration, as defined in the stack
 *       template and any values specified as template parameters. For each resource in the stack that
 *       supports drift detection, CloudFormation compares the actual configuration of the resource with
 *       its expected template configuration. Only resource properties explicitly defined in the stack
 *       template are checked for drift. A stack is considered to have drifted if one or more of its
 *       resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect unmanaged configuration changes to stacks and resources with drift
 *       detection</a>.</p>
 *          <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given
 *       stack, or <a>DetectStackResourceDrift</a> to detect drift on individual
 *       resources.</p>
 *          <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource
 *         type support for imports and drift detection</a>.</p>
 *          <p>
 *             <code>DetectStackDrift</code> can take up to several minutes, depending on the number of
 *       resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a>
 *       to monitor the progress of a detect stack drift operation. Once the drift detection operation
 *       has completed, use <a>DescribeStackResourceDrifts</a> to return drift information
 *       about the stack and its resources.</p>
 *          <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks
 *       belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack
 *       itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DetectStackDriftInput
 *   StackName: "STRING_VALUE", // required
 *   LogicalResourceIds: [ // LogicalResourceIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DetectStackDriftCommand(input);
 * const response = await client.send(command);
 * // { // DetectStackDriftOutput
 * //   StackDriftDetectionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DetectStackDriftCommandInput - {@link DetectStackDriftCommandInput}
 * @returns {@link DetectStackDriftCommandOutput}
 * @see {@link DetectStackDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DetectStackDriftCommand extends $Command
  .classBuilder<
    DetectStackDriftCommandInput,
    DetectStackDriftCommandOutput,
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
  .s("CloudFormation", "DetectStackDrift", {})
  .n("CloudFormationClient", "DetectStackDriftCommand")
  .f(void 0, void 0)
  .ser(se_DetectStackDriftCommand)
  .de(de_DetectStackDriftCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectStackDriftInput;
      output: DetectStackDriftOutput;
    };
    sdk: {
      input: DetectStackDriftCommandInput;
      output: DetectStackDriftCommandOutput;
    };
  };
}
