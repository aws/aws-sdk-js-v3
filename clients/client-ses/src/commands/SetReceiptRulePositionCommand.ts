// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetReceiptRulePositionRequest, SetReceiptRulePositionResponse } from "../models/models_0";
import { de_SetReceiptRulePositionCommand, se_SetReceiptRulePositionCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetReceiptRulePositionCommand}.
 */
export interface SetReceiptRulePositionCommandInput extends SetReceiptRulePositionRequest {}
/**
 * @public
 *
 * The output of {@link SetReceiptRulePositionCommand}.
 */
export interface SetReceiptRulePositionCommandOutput extends SetReceiptRulePositionResponse, __MetadataBearer {}

/**
 * <p>Sets the position of the specified receipt rule in the receipt rule set.</p>
 *          <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetReceiptRulePositionCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetReceiptRulePositionCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SetReceiptRulePositionRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   RuleName: "STRING_VALUE", // required
 *   After: "STRING_VALUE",
 * };
 * const command = new SetReceiptRulePositionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetReceiptRulePositionCommandInput - {@link SetReceiptRulePositionCommandInput}
 * @returns {@link SetReceiptRulePositionCommandOutput}
 * @see {@link SetReceiptRulePositionCommandInput} for command's `input` shape.
 * @see {@link SetReceiptRulePositionCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link RuleDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule does not exist.</p>
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example SetReceiptRulePosition
 * ```javascript
 * // The following example sets the position of a receipt rule in a receipt rule set:
 * const input = {
 *   "After": "PutRuleAfterThisRule",
 *   "RuleName": "RuleToReposition",
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new SetReceiptRulePositionCommand(input);
 * await client.send(command);
 * // example id: setreceiptruleposition-1469058530550
 * ```
 *
 */
export class SetReceiptRulePositionCommand extends $Command
  .classBuilder<
    SetReceiptRulePositionCommandInput,
    SetReceiptRulePositionCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "SetReceiptRulePosition", {})
  .n("SESClient", "SetReceiptRulePositionCommand")
  .f(void 0, void 0)
  .ser(se_SetReceiptRulePositionCommand)
  .de(de_SetReceiptRulePositionCommand)
  .build() {}
