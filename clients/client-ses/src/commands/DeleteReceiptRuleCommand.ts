// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReceiptRuleRequest, DeleteReceiptRuleResponse } from "../models/models_0";
import { de_DeleteReceiptRuleCommand, se_DeleteReceiptRuleCommand } from "../protocols/Aws_query";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example DeleteReceiptRule
 * ```javascript
 * // The following example deletes a receipt rule:
 * const input = {
 *   "RuleName": "MyRule",
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new DeleteReceiptRuleCommand(input);
 * await client.send(command);
 * // example id: deletereceiptrule-1469055563599
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "DeleteReceiptRule", {})
  .n("SESClient", "DeleteReceiptRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReceiptRuleCommand)
  .de(de_DeleteReceiptRuleCommand)
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
