// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccountSendingEnabledRequest } from "../models/models_0";
import { de_UpdateAccountSendingEnabledCommand, se_UpdateAccountSendingEnabledCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountSendingEnabledCommand}.
 */
export interface UpdateAccountSendingEnabledCommandInput extends UpdateAccountSendingEnabledRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountSendingEnabledCommand}.
 */
export interface UpdateAccountSendingEnabledCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables email sending across your entire Amazon SES account in the current
 *             Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms to
 *             temporarily pause email sending across your Amazon SES account in a given Amazon Web Services Region when
 *             reputation metrics (such as your bounce or complaint rates) reach certain
 *             thresholds.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateAccountSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateAccountSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateAccountSendingEnabledRequest
 *   Enabled: true || false,
 * };
 * const command = new UpdateAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccountSendingEnabledCommandInput - {@link UpdateAccountSendingEnabledCommandInput}
 * @returns {@link UpdateAccountSendingEnabledCommandOutput}
 * @see {@link UpdateAccountSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example UpdateAccountSendingEnabled
 * ```javascript
 * // The following example updated the sending status for this account.
 * const input = {
 *   Enabled: true
 * };
 * const command = new UpdateAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAccountSendingEnabledCommand extends $Command
  .classBuilder<
    UpdateAccountSendingEnabledCommandInput,
    UpdateAccountSendingEnabledCommandOutput,
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
  .s("SimpleEmailService", "UpdateAccountSendingEnabled", {})
  .n("SESClient", "UpdateAccountSendingEnabledCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccountSendingEnabledCommand)
  .de(de_UpdateAccountSendingEnabledCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountSendingEnabledRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccountSendingEnabledCommandInput;
      output: UpdateAccountSendingEnabledCommandOutput;
    };
  };
}
