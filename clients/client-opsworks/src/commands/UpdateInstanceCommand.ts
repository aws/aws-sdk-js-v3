// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateInstanceRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_UpdateInstanceCommand, se_UpdateInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInstanceCommand}.
 */
export interface UpdateInstanceCommandInput extends UpdateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceCommand}.
 */
export interface UpdateInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a specified instance.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // UpdateInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   LayerIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   InstanceType: "STRING_VALUE",
 *   AutoScalingType: "load" || "timer",
 *   Hostname: "STRING_VALUE",
 *   Os: "STRING_VALUE",
 *   AmiId: "STRING_VALUE",
 *   SshKeyName: "STRING_VALUE",
 *   Architecture: "x86_64" || "i386",
 *   InstallUpdatesOnBoot: true || false,
 *   EbsOptimized: true || false,
 *   AgentVersion: "STRING_VALUE",
 * };
 * const command = new UpdateInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInstanceCommandInput - {@link UpdateInstanceCommandInput}
 * @returns {@link UpdateInstanceCommandOutput}
 * @see {@link UpdateInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCommandOutput} for command's `response` shape.
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
export class UpdateInstanceCommand extends $Command
  .classBuilder<
    UpdateInstanceCommandInput,
    UpdateInstanceCommandOutput,
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
  .s("OpsWorks_20130218", "UpdateInstance", {})
  .n("OpsWorksClient", "UpdateInstanceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInstanceCommand)
  .de(de_UpdateInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInstanceRequest;
      output: {};
    };
    sdk: {
      input: UpdateInstanceCommandInput;
      output: UpdateInstanceCommandOutput;
    };
  };
}
