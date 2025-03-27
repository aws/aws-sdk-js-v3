// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInstanceRequest, CreateInstanceResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CreateInstanceCommand, se_CreateInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandInput extends CreateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandOutput extends CreateInstanceResult, __MetadataBearer {}

/**
 * <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an
 *         Instance to a Layer</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CreateInstanceRequest
 *   StackId: "STRING_VALUE", // required
 *   LayerIds: [ // Strings // required
 *     "STRING_VALUE",
 *   ],
 *   InstanceType: "STRING_VALUE", // required
 *   AutoScalingType: "load" || "timer",
 *   Hostname: "STRING_VALUE",
 *   Os: "STRING_VALUE",
 *   AmiId: "STRING_VALUE",
 *   SshKeyName: "STRING_VALUE",
 *   AvailabilityZone: "STRING_VALUE",
 *   VirtualizationType: "STRING_VALUE",
 *   SubnetId: "STRING_VALUE",
 *   Architecture: "x86_64" || "i386",
 *   RootDeviceType: "ebs" || "instance-store",
 *   BlockDeviceMappings: [ // BlockDeviceMappings
 *     { // BlockDeviceMapping
 *       DeviceName: "STRING_VALUE",
 *       NoDevice: "STRING_VALUE",
 *       VirtualName: "STRING_VALUE",
 *       Ebs: { // EbsBlockDevice
 *         SnapshotId: "STRING_VALUE",
 *         Iops: Number("int"),
 *         VolumeSize: Number("int"),
 *         VolumeType: "gp2" || "io1" || "standard",
 *         DeleteOnTermination: true || false,
 *       },
 *     },
 *   ],
 *   InstallUpdatesOnBoot: true || false,
 *   EbsOptimized: true || false,
 *   AgentVersion: "STRING_VALUE",
 *   Tenancy: "STRING_VALUE",
 * };
 * const command = new CreateInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceResult
 * //   InstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInstanceCommandInput - {@link CreateInstanceCommandInput}
 * @returns {@link CreateInstanceCommandOutput}
 * @see {@link CreateInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateInstanceCommand extends $Command
  .classBuilder<
    CreateInstanceCommandInput,
    CreateInstanceCommandOutput,
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
  .s("OpsWorks_20130218", "CreateInstance", {})
  .n("OpsWorksClient", "CreateInstanceCommand")
  .f(void 0, void 0)
  .ser(se_CreateInstanceCommand)
  .de(de_CreateInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInstanceRequest;
      output: CreateInstanceResult;
    };
    sdk: {
      input: CreateInstanceCommandInput;
      output: CreateInstanceCommandOutput;
    };
  };
}
