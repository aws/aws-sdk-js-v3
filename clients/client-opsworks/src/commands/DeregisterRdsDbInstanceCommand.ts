// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterRdsDbInstanceRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DeregisterRdsDbInstanceCommand, se_DeregisterRdsDbInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterRdsDbInstanceCommand}.
 */
export interface DeregisterRdsDbInstanceCommandInput extends DeregisterRdsDbInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterRdsDbInstanceCommand}.
 */
export interface DeregisterRdsDbInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregisters an Amazon RDS instance.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeregisterRdsDbInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DeregisterRdsDbInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DeregisterRdsDbInstanceRequest
 *   RdsDbInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterRdsDbInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterRdsDbInstanceCommandInput - {@link DeregisterRdsDbInstanceCommandInput}
 * @returns {@link DeregisterRdsDbInstanceCommandOutput}
 * @see {@link DeregisterRdsDbInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterRdsDbInstanceCommandOutput} for command's `response` shape.
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
export class DeregisterRdsDbInstanceCommand extends $Command
  .classBuilder<
    DeregisterRdsDbInstanceCommandInput,
    DeregisterRdsDbInstanceCommandOutput,
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
  .s("OpsWorks_20130218", "DeregisterRdsDbInstance", {})
  .n("OpsWorksClient", "DeregisterRdsDbInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterRdsDbInstanceCommand)
  .de(de_DeregisterRdsDbInstanceCommand)
  .build() {}
