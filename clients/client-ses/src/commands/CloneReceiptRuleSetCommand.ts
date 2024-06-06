// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CloneReceiptRuleSetRequest, CloneReceiptRuleSetResponse } from "../models/models_0";
import { de_CloneReceiptRuleSetCommand, se_CloneReceiptRuleSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CloneReceiptRuleSetCommand}.
 */
export interface CloneReceiptRuleSetCommandInput extends CloneReceiptRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link CloneReceiptRuleSetCommand}.
 */
export interface CloneReceiptRuleSetCommandOutput extends CloneReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Creates a receipt rule set by cloning an existing one. All receipt rules and
 *             configurations are copied to the new receipt rule set and are completely independent of
 *             the source rule set.</p>
 *          <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules">Amazon SES Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CloneReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CloneReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // CloneReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   OriginalRuleSetName: "STRING_VALUE", // required
 * };
 * const command = new CloneReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CloneReceiptRuleSetCommandInput - {@link CloneReceiptRuleSetCommandInput}
 * @returns {@link CloneReceiptRuleSetCommandOutput}
 * @see {@link CloneReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link CloneReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>Indicates that a resource could not be created because of a naming conflict.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example CloneReceiptRuleSet
 * ```javascript
 * // The following example creates a receipt rule set by cloning an existing one:
 * const input = {
 *   "OriginalRuleSetName": "RuleSetToClone",
 *   "RuleSetName": "RuleSetToCreate"
 * };
 * const command = new CloneReceiptRuleSetCommand(input);
 * await client.send(command);
 * // example id: clonereceiptruleset-1469055039770
 * ```
 *
 */
export class CloneReceiptRuleSetCommand extends $Command
  .classBuilder<
    CloneReceiptRuleSetCommandInput,
    CloneReceiptRuleSetCommandOutput,
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
  .s("SimpleEmailService", "CloneReceiptRuleSet", {})
  .n("SESClient", "CloneReceiptRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_CloneReceiptRuleSetCommand)
  .de(de_CloneReceiptRuleSetCommand)
  .build() {}
