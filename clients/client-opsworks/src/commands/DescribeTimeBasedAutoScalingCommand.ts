// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTimeBasedAutoScalingRequest, DescribeTimeBasedAutoScalingResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  de_DescribeTimeBasedAutoScalingCommand,
  se_DescribeTimeBasedAutoScalingCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTimeBasedAutoScalingCommand}.
 */
export interface DescribeTimeBasedAutoScalingCommandInput extends DescribeTimeBasedAutoScalingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTimeBasedAutoScalingCommand}.
 */
export interface DescribeTimeBasedAutoScalingCommandOutput
  extends DescribeTimeBasedAutoScalingResult,
    __MetadataBearer {}

/**
 * <p>Describes time-based auto scaling configurations for specified instances.</p>
 *          <note>
 *             <p>You must specify at least one of the parameters.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeTimeBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeTimeBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeTimeBasedAutoScalingRequest
 *   InstanceIds: [ // Strings // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeTimeBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTimeBasedAutoScalingResult
 * //   TimeBasedAutoScalingConfigurations: [ // TimeBasedAutoScalingConfigurations
 * //     { // TimeBasedAutoScalingConfiguration
 * //       InstanceId: "STRING_VALUE",
 * //       AutoScalingSchedule: { // WeeklyAutoScalingSchedule
 * //         Monday: { // DailyAutoScalingSchedule
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Tuesday: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Wednesday: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Thursday: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Friday: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Saturday: "<DailyAutoScalingSchedule>",
 * //         Sunday: "<DailyAutoScalingSchedule>",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTimeBasedAutoScalingCommandInput - {@link DescribeTimeBasedAutoScalingCommandInput}
 * @returns {@link DescribeTimeBasedAutoScalingCommandOutput}
 * @see {@link DescribeTimeBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeBasedAutoScalingCommandOutput} for command's `response` shape.
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
export class DescribeTimeBasedAutoScalingCommand extends $Command
  .classBuilder<
    DescribeTimeBasedAutoScalingCommandInput,
    DescribeTimeBasedAutoScalingCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeTimeBasedAutoScaling", {})
  .n("OpsWorksClient", "DescribeTimeBasedAutoScalingCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTimeBasedAutoScalingCommand)
  .de(de_DescribeTimeBasedAutoScalingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTimeBasedAutoScalingRequest;
      output: DescribeTimeBasedAutoScalingResult;
    };
    sdk: {
      input: DescribeTimeBasedAutoScalingCommandInput;
      output: DescribeTimeBasedAutoScalingCommandOutput;
    };
  };
}
