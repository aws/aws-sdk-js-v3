// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterInstanceRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DeregisterInstanceCommand, se_DeregisterInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeregisterInstanceCommand}.
 */
export interface DeregisterInstanceCommandInput extends DeregisterInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterInstanceCommand}.
 */
export interface DeregisterInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the
 *           instance from the stack and returns it to your control. This action cannot be used with
 *           instances that were created with AWS OpsWorks Stacks.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeregisterInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DeregisterInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DeregisterInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterInstanceCommandInput - {@link DeregisterInstanceCommandInput}
 * @returns {@link DeregisterInstanceCommandOutput}
 * @see {@link DeregisterInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceCommandOutput} for command's `response` shape.
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
export class DeregisterInstanceCommand extends $Command
  .classBuilder<
    DeregisterInstanceCommandInput,
    DeregisterInstanceCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "DeregisterInstance", {})
  .n("OpsWorksClient", "DeregisterInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterInstanceCommand)
  .de(de_DeregisterInstanceCommand)
  .build() {}
