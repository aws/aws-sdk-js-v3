// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopStackRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_StopStackCommand, se_StopStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopStackCommand}.
 */
export interface StopStackCommandInput extends StopStackRequest {}
/**
 * @public
 *
 * The output of {@link StopStackCommand}.
 */
export interface StopStackCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a specified stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, StopStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, StopStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // StopStackRequest
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new StopStackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopStackCommandInput - {@link StopStackCommandInput}
 * @returns {@link StopStackCommandOutput}
 * @see {@link StopStackCommandInput} for command's `input` shape.
 * @see {@link StopStackCommandOutput} for command's `response` shape.
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
export class StopStackCommand extends $Command
  .classBuilder<
    StopStackCommandInput,
    StopStackCommandOutput,
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
  .s("OpsWorks_20130218", "StopStack", {})
  .n("OpsWorksClient", "StopStackCommand")
  .f(void 0, void 0)
  .ser(se_StopStackCommand)
  .de(de_StopStackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopStackRequest;
      output: {};
    };
    sdk: {
      input: StopStackCommandInput;
      output: StopStackCommandOutput;
    };
  };
}
