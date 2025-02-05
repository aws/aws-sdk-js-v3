// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLoadBasedAutoScalingRequest, DescribeLoadBasedAutoScalingResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  de_DescribeLoadBasedAutoScalingCommand,
  se_DescribeLoadBasedAutoScalingCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBasedAutoScalingCommand}.
 */
export interface DescribeLoadBasedAutoScalingCommandInput extends DescribeLoadBasedAutoScalingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBasedAutoScalingCommand}.
 */
export interface DescribeLoadBasedAutoScalingCommandOutput
  extends DescribeLoadBasedAutoScalingResult,
    __MetadataBearer {}

/**
 * <p>Describes load-based auto scaling configurations for specified layers.</p>
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
 * import { OpsWorksClient, DescribeLoadBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeLoadBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeLoadBasedAutoScalingRequest
 *   LayerIds: [ // Strings // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLoadBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBasedAutoScalingResult
 * //   LoadBasedAutoScalingConfigurations: [ // LoadBasedAutoScalingConfigurations
 * //     { // LoadBasedAutoScalingConfiguration
 * //       LayerId: "STRING_VALUE",
 * //       Enable: true || false,
 * //       UpScaling: { // AutoScalingThresholds
 * //         InstanceCount: Number("int"),
 * //         ThresholdsWaitTime: Number("int"),
 * //         IgnoreMetricsTime: Number("int"),
 * //         CpuThreshold: Number("double"),
 * //         MemoryThreshold: Number("double"),
 * //         LoadThreshold: Number("double"),
 * //         Alarms: [ // Strings
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DownScaling: {
 * //         InstanceCount: Number("int"),
 * //         ThresholdsWaitTime: Number("int"),
 * //         IgnoreMetricsTime: Number("int"),
 * //         CpuThreshold: Number("double"),
 * //         MemoryThreshold: Number("double"),
 * //         LoadThreshold: Number("double"),
 * //         Alarms: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoadBasedAutoScalingCommandInput - {@link DescribeLoadBasedAutoScalingCommandInput}
 * @returns {@link DescribeLoadBasedAutoScalingCommandOutput}
 * @see {@link DescribeLoadBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBasedAutoScalingCommandOutput} for command's `response` shape.
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
export class DescribeLoadBasedAutoScalingCommand extends $Command
  .classBuilder<
    DescribeLoadBasedAutoScalingCommandInput,
    DescribeLoadBasedAutoScalingCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeLoadBasedAutoScaling", {})
  .n("OpsWorksClient", "DescribeLoadBasedAutoScalingCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLoadBasedAutoScalingCommand)
  .de(de_DescribeLoadBasedAutoScalingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLoadBasedAutoScalingRequest;
      output: DescribeLoadBasedAutoScalingResult;
    };
    sdk: {
      input: DescribeLoadBasedAutoScalingCommandInput;
      output: DescribeLoadBasedAutoScalingCommandOutput;
    };
  };
}
