// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetectStackDriftInput, DetectStackDriftOutput } from "../models/models_0";
import { DetectStackDrift$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Detects whether a stack's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
 *
 * Use `DetectStackDrift` to detect drift on all supported resources for a given stack, or DetectStackResourceDrift to detect drift on individual resources.
 *
 * For a list of stack resources that currently support drift detection, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html).
 *
 * `DetectStackDrift` can take up to several minutes, depending on the number of resources contained within the stack. Use DescribeStackDriftDetectionStatus to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its resources.
 *
 * When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform `DetectStackDrift` directly on the nested stack itself.
 *
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
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class DetectStackDriftCommand extends command<DetectStackDriftCommandInput, DetectStackDriftCommandOutput>(
  _ep0,
  _mw0,
  "DetectStackDrift",
  DetectStackDrift$
) {
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
