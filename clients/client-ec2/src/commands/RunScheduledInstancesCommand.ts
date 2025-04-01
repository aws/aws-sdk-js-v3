// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RunScheduledInstancesRequest,
  RunScheduledInstancesRequestFilterSensitiveLog,
  RunScheduledInstancesResult,
} from "../models/models_8";
import { de_RunScheduledInstancesCommand, se_RunScheduledInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RunScheduledInstancesCommand}.
 */
export interface RunScheduledInstancesCommandInput extends RunScheduledInstancesRequest {}
/**
 * @public
 *
 * The output of {@link RunScheduledInstancesCommand}.
 */
export interface RunScheduledInstancesCommandOutput extends RunScheduledInstancesResult, __MetadataBearer {}

/**
 * <p>Launches the specified Scheduled Instances.</p>
 *          <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p>
 *          <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or
 *          reboot a Scheduled Instance, but you can terminate it as needed. If you terminate a
 *          Scheduled Instance before the current scheduled time period ends, you can launch it again
 *          after a few minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RunScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RunScheduledInstancesRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   InstanceCount: Number("int"),
 *   LaunchSpecification: { // ScheduledInstancesLaunchSpecification
 *     BlockDeviceMappings: [ // ScheduledInstancesBlockDeviceMappingSet
 *       { // ScheduledInstancesBlockDeviceMapping
 *         DeviceName: "STRING_VALUE",
 *         Ebs: { // ScheduledInstancesEbs
 *           DeleteOnTermination: true || false,
 *           Encrypted: true || false,
 *           Iops: Number("int"),
 *           SnapshotId: "STRING_VALUE",
 *           VolumeSize: Number("int"),
 *           VolumeType: "STRING_VALUE",
 *         },
 *         NoDevice: "STRING_VALUE",
 *         VirtualName: "STRING_VALUE",
 *       },
 *     ],
 *     EbsOptimized: true || false,
 *     IamInstanceProfile: { // ScheduledInstancesIamInstanceProfile
 *       Arn: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     ImageId: "STRING_VALUE", // required
 *     InstanceType: "STRING_VALUE",
 *     KernelId: "STRING_VALUE",
 *     KeyName: "STRING_VALUE",
 *     Monitoring: { // ScheduledInstancesMonitoring
 *       Enabled: true || false,
 *     },
 *     NetworkInterfaces: [ // ScheduledInstancesNetworkInterfaceSet
 *       { // ScheduledInstancesNetworkInterface
 *         AssociatePublicIpAddress: true || false,
 *         DeleteOnTermination: true || false,
 *         Description: "STRING_VALUE",
 *         DeviceIndex: Number("int"),
 *         Groups: [ // ScheduledInstancesSecurityGroupIdSet
 *           "STRING_VALUE",
 *         ],
 *         Ipv6AddressCount: Number("int"),
 *         Ipv6Addresses: [ // ScheduledInstancesIpv6AddressList
 *           { // ScheduledInstancesIpv6Address
 *             Ipv6Address: "STRING_VALUE",
 *           },
 *         ],
 *         NetworkInterfaceId: "STRING_VALUE",
 *         PrivateIpAddress: "STRING_VALUE",
 *         PrivateIpAddressConfigs: [ // PrivateIpAddressConfigSet
 *           { // ScheduledInstancesPrivateIpAddressConfig
 *             Primary: true || false,
 *             PrivateIpAddress: "STRING_VALUE",
 *           },
 *         ],
 *         SecondaryPrivateIpAddressCount: Number("int"),
 *         SubnetId: "STRING_VALUE",
 *       },
 *     ],
 *     Placement: { // ScheduledInstancesPlacement
 *       AvailabilityZone: "STRING_VALUE",
 *       GroupName: "STRING_VALUE",
 *     },
 *     RamdiskId: "STRING_VALUE",
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     SubnetId: "STRING_VALUE",
 *     UserData: "STRING_VALUE",
 *   },
 *   ScheduledInstanceId: "STRING_VALUE", // required
 * };
 * const command = new RunScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * // { // RunScheduledInstancesResult
 * //   InstanceIdSet: [ // InstanceIdSet
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param RunScheduledInstancesCommandInput - {@link RunScheduledInstancesCommandInput}
 * @returns {@link RunScheduledInstancesCommandOutput}
 * @see {@link RunScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link RunScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RunScheduledInstancesCommand extends $Command
  .classBuilder<
    RunScheduledInstancesCommandInput,
    RunScheduledInstancesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "RunScheduledInstances", {})
  .n("EC2Client", "RunScheduledInstancesCommand")
  .f(RunScheduledInstancesRequestFilterSensitiveLog, void 0)
  .ser(se_RunScheduledInstancesCommand)
  .de(de_RunScheduledInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RunScheduledInstancesRequest;
      output: RunScheduledInstancesResult;
    };
    sdk: {
      input: RunScheduledInstancesCommandInput;
      output: RunScheduledInstancesCommandOutput;
    };
  };
}
