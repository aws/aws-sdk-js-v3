// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReceiptRuleRequest, DeleteReceiptRuleResponse } from "../models/models_0";
import { DeleteReceiptRule } from "../schemas/schemas_11_Receipt";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReceiptRuleCommand}.
 */
export interface DeleteReceiptRuleCommandInput extends DeleteReceiptRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReceiptRuleCommand}.
 */
export interface DeleteReceiptRuleCommandOutput extends DeleteReceiptRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified receipt rule.</p>
 *          <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteReceiptRuleCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteReceiptRuleCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // DeleteReceiptRuleRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   RuleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteReceiptRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReceiptRuleCommandInput - {@link DeleteReceiptRuleCommandInput}
 * @returns {@link DeleteReceiptRuleCommandOutput}
 * @see {@link DeleteReceiptRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteReceiptRuleCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example DeleteReceiptRule
 * ```javascript
 * // The following example deletes a receipt rule:
 * const input = {
 *   RuleName: "MyRule",
 *   RuleSetName: "MyRuleSet"
 * };
 * const command = new DeleteReceiptRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteReceiptRuleCommand extends $Command
  .classBuilder<
    DeleteReceiptRuleCommandInput,
    DeleteReceiptRuleCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "DeleteReceiptRule", {})
  .n("SESClient", "DeleteReceiptRuleCommand")
  .sc(DeleteReceiptRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReceiptRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteReceiptRuleCommandInput;
      output: DeleteReceiptRuleCommandOutput;
    };
  };
}
