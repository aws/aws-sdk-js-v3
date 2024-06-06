// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ReorderReceiptRuleSetRequest, ReorderReceiptRuleSetResponse } from "../models/models_0";
import { de_ReorderReceiptRuleSetCommand, se_ReorderReceiptRuleSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReorderReceiptRuleSetCommand}.
 */
export interface ReorderReceiptRuleSetCommandInput extends ReorderReceiptRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link ReorderReceiptRuleSetCommand}.
 */
export interface ReorderReceiptRuleSetCommandOutput extends ReorderReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Reorders the receipt rules within a receipt rule set.</p>
 *          <note>
 *             <p>All of the rules in the rule set must be represented in this request. That is, it
 *                 is error if the reorder request doesn't explicitly position all of the rules.</p>
 *          </note>
 *          <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ReorderReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ReorderReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ReorderReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   RuleNames: [ // ReceiptRuleNamesList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ReorderReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReorderReceiptRuleSetCommandInput - {@link ReorderReceiptRuleSetCommandInput}
 * @returns {@link ReorderReceiptRuleSetCommandOutput}
 * @see {@link ReorderReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link ReorderReceiptRuleSetCommandOutput} for command's `response` shape.
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
 * @example ReorderReceiptRuleSet
 * ```javascript
 * // The following example reorders the receipt rules within a receipt rule set:
 * const input = {
 *   "RuleNames": [
 *     "MyRule",
 *     "MyOtherRule"
 *   ],
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new ReorderReceiptRuleSetCommand(input);
 * await client.send(command);
 * // example id: reorderreceiptruleset-1469058156806
 * ```
 *
 */
export class ReorderReceiptRuleSetCommand extends $Command
  .classBuilder<
    ReorderReceiptRuleSetCommandInput,
    ReorderReceiptRuleSetCommandOutput,
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
  .s("SimpleEmailService", "ReorderReceiptRuleSet", {})
  .n("SESClient", "ReorderReceiptRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_ReorderReceiptRuleSetCommand)
  .de(de_ReorderReceiptRuleSetCommand)
  .build() {}
