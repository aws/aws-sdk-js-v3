// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendBonusRequest, SendBonusResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_SendBonusCommand, se_SendBonusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendBonusCommand}.
 */
export interface SendBonusCommandInput extends SendBonusRequest {}
/**
 * @public
 *
 * The output of {@link SendBonusCommand}.
 */
export interface SendBonusCommandOutput extends SendBonusResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>SendBonus</code>
 *             operation issues a payment of money from your account to a Worker.
 *             This payment happens separately from the reward you pay to the Worker
 *             when you approve the Worker's assignment. The SendBonus operation
 *             requires the Worker's ID and the assignment ID as parameters to
 *             initiate payment of the bonus. You must include a message that
 *             explains the reason for the bonus payment, as the Worker may not be
 *             expecting the payment. Amazon Mechanical Turk collects a fee for
 *             bonus payments, similar to the HIT listing fee. This operation fails
 *             if your account does not have enough funds to pay for both the bonus
 *             and the fees.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, SendBonusCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, SendBonusCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // SendBonusRequest
 *   WorkerId: "STRING_VALUE", // required
 *   BonusAmount: "STRING_VALUE", // required
 *   AssignmentId: "STRING_VALUE", // required
 *   Reason: "STRING_VALUE", // required
 *   UniqueRequestToken: "STRING_VALUE",
 * };
 * const command = new SendBonusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendBonusCommandInput - {@link SendBonusCommandInput}
 * @returns {@link SendBonusCommandOutput}
 * @see {@link SendBonusCommandInput} for command's `input` shape.
 * @see {@link SendBonusCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class SendBonusCommand extends $Command
  .classBuilder<
    SendBonusCommandInput,
    SendBonusCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "SendBonus", {})
  .n("MTurkClient", "SendBonusCommand")
  .f(void 0, void 0)
  .ser(se_SendBonusCommand)
  .de(de_SendBonusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendBonusRequest;
      output: {};
    };
    sdk: {
      input: SendBonusCommandInput;
      output: SendBonusCommandOutput;
    };
  };
}
