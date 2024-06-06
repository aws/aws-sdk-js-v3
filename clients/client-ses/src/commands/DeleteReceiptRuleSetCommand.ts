// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReceiptRuleSetRequest, DeleteReceiptRuleSetResponse } from "../models/models_0";
import { de_DeleteReceiptRuleSetCommand, se_DeleteReceiptRuleSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReceiptRuleSetCommand}.
 */
export interface DeleteReceiptRuleSetCommandInput extends DeleteReceiptRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReceiptRuleSetCommand}.
 */
export interface DeleteReceiptRuleSetCommandOutput extends DeleteReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified receipt rule set and all of the receipt rules it
 *             contains.</p>
 *          <note>
 *             <p>The currently active rule set cannot be deleted.</p>
 *          </note>
 *          <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReceiptRuleSetCommandInput - {@link DeleteReceiptRuleSetCommandInput}
 * @returns {@link DeleteReceiptRuleSetCommandOutput}
 * @see {@link DeleteReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link CannotDeleteException} (client fault)
 *  <p>Indicates that the delete operation could not be completed.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example DeleteReceiptRuleSet
 * ```javascript
 * // The following example deletes a receipt rule set:
 * const input = {
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new DeleteReceiptRuleSetCommand(input);
 * await client.send(command);
 * // example id: deletereceiptruleset-1469055713690
 * ```
 *
 */
export class DeleteReceiptRuleSetCommand extends $Command
  .classBuilder<
    DeleteReceiptRuleSetCommandInput,
    DeleteReceiptRuleSetCommandOutput,
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
  .s("SimpleEmailService", "DeleteReceiptRuleSet", {})
  .n("SESClient", "DeleteReceiptRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReceiptRuleSetCommand)
  .de(de_DeleteReceiptRuleSetCommand)
  .build() {}
