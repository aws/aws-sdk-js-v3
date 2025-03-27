// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterVolumeRequest, RegisterVolumeResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_RegisterVolumeCommand, se_RegisterVolumeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterVolumeCommand}.
 */
export interface RegisterVolumeCommandInput extends RegisterVolumeRequest {}
/**
 * @public
 *
 * The output of {@link RegisterVolumeCommand}.
 */
export interface RegisterVolumeCommandOutput extends RegisterVolumeResult, __MetadataBearer {}

/**
 * <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one
 *       stack at a time. If the volume is already registered, you must first deregister it by calling
 *         <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterVolumeCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterVolumeCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // RegisterVolumeRequest
 *   Ec2VolumeId: "STRING_VALUE",
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new RegisterVolumeCommand(input);
 * const response = await client.send(command);
 * // { // RegisterVolumeResult
 * //   VolumeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterVolumeCommandInput - {@link RegisterVolumeCommandInput}
 * @returns {@link RegisterVolumeCommandOutput}
 * @see {@link RegisterVolumeCommandInput} for command's `input` shape.
 * @see {@link RegisterVolumeCommandOutput} for command's `response` shape.
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
export class RegisterVolumeCommand extends $Command
  .classBuilder<
    RegisterVolumeCommandInput,
    RegisterVolumeCommandOutput,
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
  .s("OpsWorks_20130218", "RegisterVolume", {})
  .n("OpsWorksClient", "RegisterVolumeCommand")
  .f(void 0, void 0)
  .ser(se_RegisterVolumeCommand)
  .de(de_RegisterVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterVolumeRequest;
      output: RegisterVolumeResult;
    };
    sdk: {
      input: RegisterVolumeCommandInput;
      output: RegisterVolumeCommandOutput;
    };
  };
}
