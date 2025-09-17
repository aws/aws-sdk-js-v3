// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStackDriftDetectionStatusInput, DescribeStackDriftDetectionStatusOutput } from "../models/models_0";
import {
  de_DescribeStackDriftDetectionStatusCommand,
  se_DescribeStackDriftDetectionStatusCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackDriftDetectionStatusCommand}.
 */
export interface DescribeStackDriftDetectionStatusCommandInput extends DescribeStackDriftDetectionStatusInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackDriftDetectionStatusCommand}.
 */
export interface DescribeStackDriftDetectionStatusCommandOutput
  extends DescribeStackDriftDetectionStatusOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about a stack drift detection operation. A stack drift detection
 *       operation detects whether a stack's actual configuration differs, or has
 *         <i>drifted</i>, from its expected configuration, as defined in the stack
 *       template and any values specified as template parameters. A stack is considered to have
 *       drifted if one or more of its resources have drifted. For more information about stack and
 *       resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect unmanaged
 *         configuration changes to stacks and resources with drift detection</a>.</p>
 *          <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation.
 *         <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to
 *       monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>.
 *       Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its
 *       resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackDriftDetectionStatusInput
 *   StackDriftDetectionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackDriftDetectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackDriftDetectionStatusOutput
 * //   StackId: "STRING_VALUE", // required
 * //   StackDriftDetectionId: "STRING_VALUE", // required
 * //   StackDriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED",
 * //   DetectionStatus: "DETECTION_IN_PROGRESS" || "DETECTION_FAILED" || "DETECTION_COMPLETE", // required
 * //   DetectionStatusReason: "STRING_VALUE",
 * //   DriftedStackResourceCount: Number("int"),
 * //   Timestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeStackDriftDetectionStatusCommandInput - {@link DescribeStackDriftDetectionStatusCommandInput}
 * @returns {@link DescribeStackDriftDetectionStatusCommandOutput}
 * @see {@link DescribeStackDriftDetectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeStackDriftDetectionStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackDriftDetectionStatusCommand extends $Command
  .classBuilder<
    DescribeStackDriftDetectionStatusCommandInput,
    DescribeStackDriftDetectionStatusCommandOutput,
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
  .s("CloudFormation", "DescribeStackDriftDetectionStatus", {})
  .n("CloudFormationClient", "DescribeStackDriftDetectionStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStackDriftDetectionStatusCommand)
  .de(de_DescribeStackDriftDetectionStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackDriftDetectionStatusInput;
      output: DescribeStackDriftDetectionStatusOutput;
    };
    sdk: {
      input: DescribeStackDriftDetectionStatusCommandInput;
      output: DescribeStackDriftDetectionStatusCommandOutput;
    };
  };
}
