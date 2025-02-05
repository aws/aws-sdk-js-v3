// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetLoadBasedAutoScalingRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_SetLoadBasedAutoScalingCommand, se_SetLoadBasedAutoScalingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetLoadBasedAutoScalingCommand}.
 */
export interface SetLoadBasedAutoScalingCommandInput extends SetLoadBasedAutoScalingRequest {}
/**
 * @public
 *
 * The output of {@link SetLoadBasedAutoScalingCommand}.
 */
export interface SetLoadBasedAutoScalingCommandOutput extends __MetadataBearer {}

/**
 * <p>Specify the load-based auto scaling configuration for a specified layer. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing
 *         Load with Time-based and Load-based Instances</a>.</p>
 *          <note>
 *             <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances.
 *              Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough
 *              instances to handle the maximum anticipated load.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, SetLoadBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, SetLoadBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // SetLoadBasedAutoScalingRequest
 *   LayerId: "STRING_VALUE", // required
 *   Enable: true || false,
 *   UpScaling: { // AutoScalingThresholds
 *     InstanceCount: Number("int"),
 *     ThresholdsWaitTime: Number("int"),
 *     IgnoreMetricsTime: Number("int"),
 *     CpuThreshold: Number("double"),
 *     MemoryThreshold: Number("double"),
 *     LoadThreshold: Number("double"),
 *     Alarms: [ // Strings
 *       "STRING_VALUE",
 *     ],
 *   },
 *   DownScaling: {
 *     InstanceCount: Number("int"),
 *     ThresholdsWaitTime: Number("int"),
 *     IgnoreMetricsTime: Number("int"),
 *     CpuThreshold: Number("double"),
 *     MemoryThreshold: Number("double"),
 *     LoadThreshold: Number("double"),
 *     Alarms: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SetLoadBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoadBasedAutoScalingCommandInput - {@link SetLoadBasedAutoScalingCommandInput}
 * @returns {@link SetLoadBasedAutoScalingCommandOutput}
 * @see {@link SetLoadBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link SetLoadBasedAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 * @public
 */
export class SetLoadBasedAutoScalingCommand extends $Command
  .classBuilder<
    SetLoadBasedAutoScalingCommandInput,
    SetLoadBasedAutoScalingCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "SetLoadBasedAutoScaling", {})
  .n("OpsWorksClient", "SetLoadBasedAutoScalingCommand")
  .f(void 0, void 0)
  .ser(se_SetLoadBasedAutoScalingCommand)
  .de(de_SetLoadBasedAutoScalingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetLoadBasedAutoScalingRequest;
      output: {};
    };
    sdk: {
      input: SetLoadBasedAutoScalingCommandInput;
      output: SetLoadBasedAutoScalingCommandOutput;
    };
  };
}
