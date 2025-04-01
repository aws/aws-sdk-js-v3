// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartStackRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_StartStackCommand, se_StartStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartStackCommand}.
 */
export interface StartStackCommandInput extends StartStackRequest {}
/**
 * @public
 *
 * The output of {@link StartStackCommand}.
 */
export interface StartStackCommandOutput extends __MetadataBearer {}

/**
 * <p>Starts a stack's instances.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, StartStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, StartStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // StartStackRequest
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new StartStackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartStackCommandInput - {@link StartStackCommandInput}
 * @returns {@link StartStackCommandOutput}
 * @see {@link StartStackCommandInput} for command's `input` shape.
 * @see {@link StartStackCommandOutput} for command's `response` shape.
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
export class StartStackCommand extends $Command
  .classBuilder<
    StartStackCommandInput,
    StartStackCommandOutput,
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
  .s("OpsWorks_20130218", "StartStack", {})
  .n("OpsWorksClient", "StartStackCommand")
  .f(void 0, void 0)
  .ser(se_StartStackCommand)
  .de(de_StartStackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartStackRequest;
      output: {};
    };
    sdk: {
      input: StartStackCommandInput;
      output: StartStackCommandOutput;
    };
  };
}
