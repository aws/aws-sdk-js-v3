// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetPermissionRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_SetPermissionCommand, se_SetPermissionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetPermissionCommand}.
 */
export interface SetPermissionCommandInput extends SetPermissionRequest {}
/**
 * @public
 *
 * The output of {@link SetPermissionCommand}.
 */
export interface SetPermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Specifies a user's permissions. For more information, see
 *           <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and
 *         Permissions</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, SetPermissionCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, SetPermissionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // SetPermissionRequest
 *   StackId: "STRING_VALUE", // required
 *   IamUserArn: "STRING_VALUE", // required
 *   AllowSsh: true || false,
 *   AllowSudo: true || false,
 *   Level: "STRING_VALUE",
 * };
 * const command = new SetPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetPermissionCommandInput - {@link SetPermissionCommandInput}
 * @returns {@link SetPermissionCommandOutput}
 * @see {@link SetPermissionCommandInput} for command's `input` shape.
 * @see {@link SetPermissionCommandOutput} for command's `response` shape.
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
export class SetPermissionCommand extends $Command
  .classBuilder<
    SetPermissionCommandInput,
    SetPermissionCommandOutput,
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
  .s("OpsWorks_20130218", "SetPermission", {})
  .n("OpsWorksClient", "SetPermissionCommand")
  .f(void 0, void 0)
  .ser(se_SetPermissionCommand)
  .de(de_SetPermissionCommand)
  .build() {}
