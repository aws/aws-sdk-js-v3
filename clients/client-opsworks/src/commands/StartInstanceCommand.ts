// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartInstanceRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_StartInstanceCommand, se_StartInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInstanceCommand}.
 */
export interface StartInstanceCommandInput extends StartInstanceRequest {}
/**
 * @public
 *
 * The output of {@link StartInstanceCommand}.
 */
export interface StartInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting,
 *         Stopping, and Rebooting Instances</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, StartInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, StartInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // StartInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new StartInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartInstanceCommandInput - {@link StartInstanceCommandInput}
 * @returns {@link StartInstanceCommandOutput}
 * @see {@link StartInstanceCommandInput} for command's `input` shape.
 * @see {@link StartInstanceCommandOutput} for command's `response` shape.
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
export class StartInstanceCommand extends $Command
  .classBuilder<
    StartInstanceCommandInput,
    StartInstanceCommandOutput,
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
  .s("OpsWorks_20130218", "StartInstance", {})
  .n("OpsWorksClient", "StartInstanceCommand")
  .f(void 0, void 0)
  .ser(se_StartInstanceCommand)
  .de(de_StartInstanceCommand)
  .build() {}
