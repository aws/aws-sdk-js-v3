// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetActiveReceiptRuleSetRequest, SetActiveReceiptRuleSetResponse } from "../models/models_0";
import { de_SetActiveReceiptRuleSetCommand, se_SetActiveReceiptRuleSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetActiveReceiptRuleSetCommand}.
 */
export interface SetActiveReceiptRuleSetCommandInput extends SetActiveReceiptRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link SetActiveReceiptRuleSetCommand}.
 */
export interface SetActiveReceiptRuleSetCommandOutput extends SetActiveReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Sets the specified receipt rule set as the active receipt rule set.</p>
 *          <note>
 *             <p>To disable your email-receiving through Amazon SES completely, you can call this
 *                 operation with <code>RuleSetName</code> set to null.</p>
 *          </note>
 *          <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetActiveReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetActiveReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SESClient(config);
 * const input = { // SetActiveReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE",
 * };
 * const command = new SetActiveReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetActiveReceiptRuleSetCommandInput - {@link SetActiveReceiptRuleSetCommandInput}
 * @returns {@link SetActiveReceiptRuleSetCommandOutput}
 * @see {@link SetActiveReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link SetActiveReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example SetActiveReceiptRuleSet
 * ```javascript
 * // The following example sets the active receipt rule set:
 * const input = {
 *   "RuleSetName": "RuleSetToActivate"
 * };
 * const command = new SetActiveReceiptRuleSetCommand(input);
 * await client.send(command);
 * // example id: setactivereceiptruleset-1469058391329
 * ```
 *
 */
export class SetActiveReceiptRuleSetCommand extends $Command
  .classBuilder<
    SetActiveReceiptRuleSetCommandInput,
    SetActiveReceiptRuleSetCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "SetActiveReceiptRuleSet", {})
  .n("SESClient", "SetActiveReceiptRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_SetActiveReceiptRuleSetCommand)
  .de(de_SetActiveReceiptRuleSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetActiveReceiptRuleSetRequest;
      output: {};
    };
    sdk: {
      input: SetActiveReceiptRuleSetCommandInput;
      output: SetActiveReceiptRuleSetCommandOutput;
    };
  };
}
