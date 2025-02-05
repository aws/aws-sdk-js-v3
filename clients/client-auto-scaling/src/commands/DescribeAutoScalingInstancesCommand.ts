// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AutoScalingInstancesType, DescribeAutoScalingInstancesType } from "../models/models_0";
import { de_DescribeAutoScalingInstancesCommand, se_DescribeAutoScalingInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutoScalingInstancesCommand}.
 */
export interface DescribeAutoScalingInstancesCommandInput extends DescribeAutoScalingInstancesType {}
/**
 * @public
 *
 * The output of {@link DescribeAutoScalingInstancesCommand}.
 */
export interface DescribeAutoScalingInstancesCommandOutput extends AutoScalingInstancesType, __MetadataBearer {}

/**
 * <p>Gets information about the Auto Scaling instances in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeAutoScalingInstancesType
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAutoScalingInstancesCommand(input);
 * const response = await client.send(command);
 * // { // AutoScalingInstancesType
 * //   AutoScalingInstances: [ // AutoScalingInstances
 * //     { // AutoScalingInstanceDetails
 * //       InstanceId: "STRING_VALUE", // required
 * //       InstanceType: "STRING_VALUE",
 * //       AutoScalingGroupName: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       LifecycleState: "STRING_VALUE", // required
 * //       HealthStatus: "STRING_VALUE", // required
 * //       LaunchConfigurationName: "STRING_VALUE",
 * //       LaunchTemplate: { // LaunchTemplateSpecification
 * //         LaunchTemplateId: "STRING_VALUE",
 * //         LaunchTemplateName: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       ProtectedFromScaleIn: true || false, // required
 * //       WeightedCapacity: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAutoScalingInstancesCommandInput - {@link DescribeAutoScalingInstancesCommandInput}
 * @returns {@link DescribeAutoScalingInstancesCommandOutput}
 * @see {@link DescribeAutoScalingInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To describe one or more Auto Scaling instances
 * ```javascript
 * // This example describes the specified Auto Scaling instance.
 * const input = {
 *   "InstanceIds": [
 *     "i-05b4f7d5be44822a6"
 *   ]
 * };
 * const command = new DescribeAutoScalingInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutoScalingInstances": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "AvailabilityZone": "us-west-2c",
 *       "HealthStatus": "HEALTHY",
 *       "InstanceId": "i-05b4f7d5be44822a6",
 *       "InstanceType": "t3.micro",
 *       "LaunchConfigurationName": "my-launch-config",
 *       "LifecycleState": "InService",
 *       "ProtectedFromScaleIn": false
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-auto-scaling-instances-1
 * ```
 *
 */
export class DescribeAutoScalingInstancesCommand extends $Command
  .classBuilder<
    DescribeAutoScalingInstancesCommandInput,
    DescribeAutoScalingInstancesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeAutoScalingInstances", {})
  .n("AutoScalingClient", "DescribeAutoScalingInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAutoScalingInstancesCommand)
  .de(de_DescribeAutoScalingInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAutoScalingInstancesType;
      output: AutoScalingInstancesType;
    };
    sdk: {
      input: DescribeAutoScalingInstancesCommandInput;
      output: DescribeAutoScalingInstancesCommandOutput;
    };
  };
}
