// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstancesRequest, DescribeInstancesResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeInstancesCommand, se_DescribeInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancesCommand}.
 */
export interface DescribeInstancesCommandInput extends DescribeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancesCommand}.
 */
export interface DescribeInstancesCommandOutput extends DescribeInstancesResult, __MetadataBearer {}

/**
 * <p>Requests a description of a set of instances.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeInstancesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeInstancesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeInstancesRequest
 *   StackId: "STRING_VALUE",
 *   LayerId: "STRING_VALUE",
 *   InstanceIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancesResult
 * //   Instances: [ // Instances
 * //     { // Instance
 * //       AgentVersion: "STRING_VALUE",
 * //       AmiId: "STRING_VALUE",
 * //       Architecture: "x86_64" || "i386",
 * //       Arn: "STRING_VALUE",
 * //       AutoScalingType: "load" || "timer",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       BlockDeviceMappings: [ // BlockDeviceMappings
 * //         { // BlockDeviceMapping
 * //           DeviceName: "STRING_VALUE",
 * //           NoDevice: "STRING_VALUE",
 * //           VirtualName: "STRING_VALUE",
 * //           Ebs: { // EbsBlockDevice
 * //             SnapshotId: "STRING_VALUE",
 * //             Iops: Number("int"),
 * //             VolumeSize: Number("int"),
 * //             VolumeType: "gp2" || "io1" || "standard",
 * //             DeleteOnTermination: true || false,
 * //           },
 * //         },
 * //       ],
 * //       CreatedAt: "STRING_VALUE",
 * //       EbsOptimized: true || false,
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       EcsClusterArn: "STRING_VALUE",
 * //       EcsContainerInstanceArn: "STRING_VALUE",
 * //       ElasticIp: "STRING_VALUE",
 * //       Hostname: "STRING_VALUE",
 * //       InfrastructureClass: "STRING_VALUE",
 * //       InstallUpdatesOnBoot: true || false,
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       LastServiceErrorId: "STRING_VALUE",
 * //       LayerIds: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       Os: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       PrivateDns: "STRING_VALUE",
 * //       PrivateIp: "STRING_VALUE",
 * //       PublicDns: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //       RegisteredBy: "STRING_VALUE",
 * //       ReportedAgentVersion: "STRING_VALUE",
 * //       ReportedOs: { // ReportedOs
 * //         Family: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       RootDeviceType: "ebs" || "instance-store",
 * //       RootDeviceVolumeId: "STRING_VALUE",
 * //       SecurityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SshHostDsaKeyFingerprint: "STRING_VALUE",
 * //       SshHostRsaKeyFingerprint: "STRING_VALUE",
 * //       SshKeyName: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Tenancy: "STRING_VALUE",
 * //       VirtualizationType: "paravirtual" || "hvm",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInstancesCommandInput - {@link DescribeInstancesCommandInput}
 * @returns {@link DescribeInstancesCommandOutput}
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
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
export class DescribeInstancesCommand extends $Command
  .classBuilder<
    DescribeInstancesCommandInput,
    DescribeInstancesCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeInstances", {})
  .n("OpsWorksClient", "DescribeInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstancesCommand)
  .de(de_DescribeInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstancesRequest;
      output: DescribeInstancesResult;
    };
    sdk: {
      input: DescribeInstancesCommandInput;
      output: DescribeInstancesCommandOutput;
    };
  };
}
