// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchConfigurationNamesType, LaunchConfigurationsType } from "../models/models_0";
import { de_DescribeLaunchConfigurationsCommand, se_DescribeLaunchConfigurationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLaunchConfigurationsCommand}.
 */
export interface DescribeLaunchConfigurationsCommandInput extends LaunchConfigurationNamesType {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchConfigurationsCommand}.
 */
export interface DescribeLaunchConfigurationsCommandOutput extends LaunchConfigurationsType, __MetadataBearer {}

/**
 * <p>Gets information about the launch configurations in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLaunchConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLaunchConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // LaunchConfigurationNamesType
 *   LaunchConfigurationNames: [ // LaunchConfigurationNames
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeLaunchConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // LaunchConfigurationsType
 * //   LaunchConfigurations: [ // LaunchConfigurations // required
 * //     { // LaunchConfiguration
 * //       LaunchConfigurationName: "STRING_VALUE", // required
 * //       LaunchConfigurationARN: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE", // required
 * //       KeyName: "STRING_VALUE",
 * //       SecurityGroups: [ // SecurityGroups
 * //         "STRING_VALUE",
 * //       ],
 * //       ClassicLinkVPCId: "STRING_VALUE",
 * //       ClassicLinkVPCSecurityGroups: [ // ClassicLinkVPCSecurityGroups
 * //         "STRING_VALUE",
 * //       ],
 * //       UserData: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE", // required
 * //       KernelId: "STRING_VALUE",
 * //       RamdiskId: "STRING_VALUE",
 * //       BlockDeviceMappings: [ // BlockDeviceMappings
 * //         { // BlockDeviceMapping
 * //           VirtualName: "STRING_VALUE",
 * //           DeviceName: "STRING_VALUE", // required
 * //           Ebs: { // Ebs
 * //             SnapshotId: "STRING_VALUE",
 * //             VolumeSize: Number("int"),
 * //             VolumeType: "STRING_VALUE",
 * //             DeleteOnTermination: true || false,
 * //             Iops: Number("int"),
 * //             Encrypted: true || false,
 * //             Throughput: Number("int"),
 * //           },
 * //           NoDevice: true || false,
 * //         },
 * //       ],
 * //       InstanceMonitoring: { // InstanceMonitoring
 * //         Enabled: true || false,
 * //       },
 * //       SpotPrice: "STRING_VALUE",
 * //       IamInstanceProfile: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       EbsOptimized: true || false,
 * //       AssociatePublicIpAddress: true || false,
 * //       PlacementTenancy: "STRING_VALUE",
 * //       MetadataOptions: { // InstanceMetadataOptions
 * //         HttpTokens: "optional" || "required",
 * //         HttpPutResponseHopLimit: Number("int"),
 * //         HttpEndpoint: "disabled" || "enabled",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLaunchConfigurationsCommandInput - {@link DescribeLaunchConfigurationsCommandInput}
 * @returns {@link DescribeLaunchConfigurationsCommandOutput}
 * @see {@link DescribeLaunchConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchConfigurationsCommandOutput} for command's `response` shape.
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
 * @example To describe Auto Scaling launch configurations
 * ```javascript
 * // This example describes the specified launch configuration.
 * const input = {
 *   "LaunchConfigurationNames": [
 *     "my-launch-config"
 *   ]
 * };
 * const command = new DescribeLaunchConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchConfigurations": [
 *     {
 *       "AssociatePublicIpAddress": true,
 *       "BlockDeviceMappings": [],
 *       "CreatedTime": "2014-05-07T17:39:28.599Z",
 *       "EbsOptimized": false,
 *       "ImageId": "ami-043a5034",
 *       "InstanceMonitoring": {
 *         "Enabled": true
 *       },
 *       "InstanceType": "t1.micro",
 *       "LaunchConfigurationARN": "arn:aws:autoscaling:us-west-2:123456789012:launchConfiguration:98d3b196-4cf9-4e88-8ca1-8547c24ced8b:launchConfigurationName/my-launch-config",
 *       "LaunchConfigurationName": "my-launch-config",
 *       "SecurityGroups": [
 *         "sg-67ef0308"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-launch-configurations-1
 * ```
 *
 */
export class DescribeLaunchConfigurationsCommand extends $Command
  .classBuilder<
    DescribeLaunchConfigurationsCommandInput,
    DescribeLaunchConfigurationsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DescribeLaunchConfigurations", {})
  .n("AutoScalingClient", "DescribeLaunchConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLaunchConfigurationsCommand)
  .de(de_DescribeLaunchConfigurationsCommand)
  .build() {}
