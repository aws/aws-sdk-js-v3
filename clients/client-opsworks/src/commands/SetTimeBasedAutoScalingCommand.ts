// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetTimeBasedAutoScalingRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_SetTimeBasedAutoScalingCommand, se_SetTimeBasedAutoScalingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetTimeBasedAutoScalingCommand}.
 */
export interface SetTimeBasedAutoScalingCommandInput extends SetTimeBasedAutoScalingRequest {}
/**
 * @public
 *
 * The output of {@link SetTimeBasedAutoScalingCommand}.
 */
export interface SetTimeBasedAutoScalingCommandOutput extends __MetadataBearer {}

/**
 * <p>Specify the time-based auto scaling configuration for a specified instance. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing
 *         Load with Time-based and Load-based Instances</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, SetTimeBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, SetTimeBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // SetTimeBasedAutoScalingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AutoScalingSchedule: { // WeeklyAutoScalingSchedule
 *     Monday: { // DailyAutoScalingSchedule
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Tuesday: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Wednesday: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Thursday: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Friday: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Saturday: "<DailyAutoScalingSchedule>",
 *     Sunday: "<DailyAutoScalingSchedule>",
 *   },
 * };
 * const command = new SetTimeBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetTimeBasedAutoScalingCommandInput - {@link SetTimeBasedAutoScalingCommandInput}
 * @returns {@link SetTimeBasedAutoScalingCommandOutput}
 * @see {@link SetTimeBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link SetTimeBasedAutoScalingCommandOutput} for command's `response` shape.
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
export class SetTimeBasedAutoScalingCommand extends $Command
  .classBuilder<
    SetTimeBasedAutoScalingCommandInput,
    SetTimeBasedAutoScalingCommandOutput,
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
  .s("OpsWorks_20130218", "SetTimeBasedAutoScaling", {})
  .n("OpsWorksClient", "SetTimeBasedAutoScalingCommand")
  .f(void 0, void 0)
  .ser(se_SetTimeBasedAutoScalingCommand)
  .de(de_SetTimeBasedAutoScalingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTimeBasedAutoScalingRequest;
      output: {};
    };
    sdk: {
      input: SetTimeBasedAutoScalingCommandInput;
      output: SetTimeBasedAutoScalingCommandOutput;
    };
  };
}
