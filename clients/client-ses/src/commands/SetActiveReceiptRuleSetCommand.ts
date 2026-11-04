// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetActiveReceiptRuleSetRequest, SetActiveReceiptRuleSetResponse } from "../models/models_0";
import { SetActiveReceiptRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets the specified receipt rule set as the active receipt rule set.
 *
 * > **Note:** To disable your email-receiving through Amazon SES completely, you can call this operation with `RuleSetName` set to null.
 *
 * For information about managing receipt rule sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html).
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetActiveReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetActiveReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
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
 *
 * Indicates that the provided receipt rule set does not exist.
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @example SetActiveReceiptRuleSet
 * ```javascript
 * // The following example sets the active receipt rule set:
 * const input = {
 *   RuleSetName: "RuleSetToActivate"
 * };
 * const command = new SetActiveReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetActiveReceiptRuleSetCommand extends command<SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput>(
  _ep0,
  _mw0,
  "SetActiveReceiptRuleSet",
  SetActiveReceiptRuleSet$
) {
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
