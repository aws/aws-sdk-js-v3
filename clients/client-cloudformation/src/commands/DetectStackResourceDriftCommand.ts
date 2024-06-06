// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetectStackResourceDriftInput, DetectStackResourceDriftOutput } from "../models/models_0";
import { de_DetectStackResourceDriftCommand, se_DetectStackResourceDriftCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectStackResourceDriftCommand}.
 */
export interface DetectStackResourceDriftCommandInput extends DetectStackResourceDriftInput {}
/**
 * @public
 *
 * The output of {@link DetectStackResourceDriftCommand}.
 */
export interface DetectStackResourceDriftCommandOutput extends DetectStackResourceDriftOutput, __MetadataBearer {}

/**
 * <p>Returns information about whether a resource's actual configuration differs, or has
 *    <i>drifted</i>, from its expected configuration, as defined in the stack template and any values
 *    specified as template parameters. This information includes actual and expected property values for resources in
 *    which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift.
 *    For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to
 *    Stacks and Resources</a>.</p>
 *          <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p>
 *          <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support
 *    drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift
 *    Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackResourceDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackResourceDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DetectStackResourceDriftInput
 *   StackName: "STRING_VALUE", // required
 *   LogicalResourceId: "STRING_VALUE", // required
 * };
 * const command = new DetectStackResourceDriftCommand(input);
 * const response = await client.send(command);
 * // { // DetectStackResourceDriftOutput
 * //   StackResourceDrift: { // StackResourceDrift
 * //     StackId: "STRING_VALUE", // required
 * //     LogicalResourceId: "STRING_VALUE", // required
 * //     PhysicalResourceId: "STRING_VALUE",
 * //     PhysicalResourceIdContext: [ // PhysicalResourceIdContext
 * //       { // PhysicalResourceIdContextKeyValuePair
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ResourceType: "STRING_VALUE", // required
 * //     ExpectedProperties: "STRING_VALUE",
 * //     ActualProperties: "STRING_VALUE",
 * //     PropertyDifferences: [ // PropertyDifferences
 * //       { // PropertyDifference
 * //         PropertyPath: "STRING_VALUE", // required
 * //         ExpectedValue: "STRING_VALUE", // required
 * //         ActualValue: "STRING_VALUE", // required
 * //         DifferenceType: "ADD" || "REMOVE" || "NOT_EQUAL", // required
 * //       },
 * //     ],
 * //     StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED", // required
 * //     Timestamp: new Date("TIMESTAMP"), // required
 * //     ModuleInfo: { // ModuleInfo
 * //       TypeHierarchy: "STRING_VALUE",
 * //       LogicalIdHierarchy: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DetectStackResourceDriftCommandInput - {@link DetectStackResourceDriftCommandInput}
 * @returns {@link DetectStackResourceDriftCommandOutput}
 * @see {@link DetectStackResourceDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackResourceDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class DetectStackResourceDriftCommand extends $Command
  .classBuilder<
    DetectStackResourceDriftCommandInput,
    DetectStackResourceDriftCommandOutput,
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
  .s("CloudFormation", "DetectStackResourceDrift", {})
  .n("CloudFormationClient", "DetectStackResourceDriftCommand")
  .f(void 0, void 0)
  .ser(se_DetectStackResourceDriftCommand)
  .de(de_DetectStackResourceDriftCommand)
  .build() {}
