// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReorderReceiptRuleSetRequest, ReorderReceiptRuleSetResponse } from "../models/models_0";
import { ReorderReceiptRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Reorders the receipt rules within a receipt rule set.
 *
 * > **Note:** All of the rules in the rule set must be represented in this request. That is, it is error if the reorder request doesn't explicitly position all of the rules.
 *
 * For information about managing receipt rule sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html).
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ReorderReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ReorderReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
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
 *
 * Indicates that the provided receipt rule does not exist.
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *
 * Indicates that the provided receipt rule set does not exist.
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @example ReorderReceiptRuleSet
 * ```javascript
 * // The following example reorders the receipt rules within a receipt rule set:
 * const input = {
 *   RuleNames: [
 *     "MyRule",
 *     "MyOtherRule"
 *   ],
 *   RuleSetName: "MyRuleSet"
 * };
 * const command = new ReorderReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ReorderReceiptRuleSetCommand extends command<ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput>(
  _ep0,
  _mw0,
  "ReorderReceiptRuleSet",
  ReorderReceiptRuleSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReorderReceiptRuleSetRequest;
      output: {};
    };
    sdk: {
      input: ReorderReceiptRuleSetCommandInput;
      output: ReorderReceiptRuleSetCommandOutput;
    };
  };
}
