// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTerminationPolicyTypesAnswer } from "../models/models_0";
import {
  de_DescribeTerminationPolicyTypesCommand,
  se_DescribeTerminationPolicyTypesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTerminationPolicyTypesCommand}.
 */
export interface DescribeTerminationPolicyTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeTerminationPolicyTypesCommand}.
 */
export interface DescribeTerminationPolicyTypesCommandOutput
  extends DescribeTerminationPolicyTypesAnswer,
    __MetadataBearer {}

/**
 * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Configure
 *                 termination policies for Amazon EC2 Auto Scaling</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeTerminationPolicyTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeTerminationPolicyTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeTerminationPolicyTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTerminationPolicyTypesAnswer
 * //   TerminationPolicyTypes: [ // TerminationPolicies
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTerminationPolicyTypesCommandInput - {@link DescribeTerminationPolicyTypesCommandInput}
 * @returns {@link DescribeTerminationPolicyTypesCommandOutput}
 * @see {@link DescribeTerminationPolicyTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeTerminationPolicyTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To describe termination policy types
 * ```javascript
 * // This example describes the available termination policy types.
 * const input = { /* empty *\/ };
 * const command = new DescribeTerminationPolicyTypesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TerminationPolicyTypes: [
 *     "ClosestToNextInstanceHour",
 *     "Default",
 *     "NewestInstance",
 *     "OldestInstance",
 *     "OldestLaunchConfiguration"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTerminationPolicyTypesCommand extends $Command
  .classBuilder<
    DescribeTerminationPolicyTypesCommandInput,
    DescribeTerminationPolicyTypesCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DescribeTerminationPolicyTypes", {})
  .n("AutoScalingClient", "DescribeTerminationPolicyTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTerminationPolicyTypesCommand)
  .de(de_DescribeTerminationPolicyTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeTerminationPolicyTypesAnswer;
    };
    sdk: {
      input: DescribeTerminationPolicyTypesCommandInput;
      output: DescribeTerminationPolicyTypesCommandOutput;
    };
  };
}
