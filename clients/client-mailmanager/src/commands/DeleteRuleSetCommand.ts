// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { DeleteRuleSetRequest, DeleteRuleSetResponse } from "../models/models_0";
import { de_DeleteRuleSetCommand, se_DeleteRuleSetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRuleSetCommand}.
 */
export interface DeleteRuleSetCommandInput extends DeleteRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleSetCommand}.
 */
export interface DeleteRuleSetCommandOutput extends DeleteRuleSetResponse, __MetadataBearer {}

/**
 * <p>Delete a rule set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteRuleSetCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteRuleSetCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // DeleteRuleSetRequest
 *   RuleSetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuleSetCommandInput - {@link DeleteRuleSetCommandInput}
 * @returns {@link DeleteRuleSetCommandOutput}
 * @see {@link DeleteRuleSetCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleSetCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class DeleteRuleSetCommand extends $Command
  .classBuilder<
    DeleteRuleSetCommandInput,
    DeleteRuleSetCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "DeleteRuleSet", {})
  .n("MailManagerClient", "DeleteRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRuleSetCommand)
  .de(de_DeleteRuleSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuleSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteRuleSetCommandInput;
      output: DeleteRuleSetCommandOutput;
    };
  };
}
