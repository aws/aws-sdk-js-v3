// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountSendingEnabledResponse } from "../models/models_0";
import { de_GetAccountSendingEnabledCommand, se_GetAccountSendingEnabledCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSendingEnabledCommand}.
 */
export interface GetAccountSendingEnabledCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountSendingEnabledCommand}.
 */
export interface GetAccountSendingEnabledCommandOutput extends GetAccountSendingEnabledResponse, __MetadataBearer {}

/**
 * <p>Returns the email sending status of the Amazon SES account for the current Region.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetAccountSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetAccountSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSendingEnabledResponse
 * //   Enabled: true || false,
 * // };
 *
 * ```
 *
 * @param GetAccountSendingEnabledCommandInput - {@link GetAccountSendingEnabledCommandInput}
 * @returns {@link GetAccountSendingEnabledCommandOutput}
 * @see {@link GetAccountSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link GetAccountSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example GetAccountSendingEnabled
 * ```javascript
 * // The following example returns if sending status for an account is enabled. (true / false):
 * const input = {};
 * const command = new GetAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Enabled": true
 * }
 * *\/
 * // example id: getaccountsendingenabled-1469047741333
 * ```
 *
 */
export class GetAccountSendingEnabledCommand extends $Command
  .classBuilder<
    GetAccountSendingEnabledCommandInput,
    GetAccountSendingEnabledCommandOutput,
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
  .s("SimpleEmailService", "GetAccountSendingEnabled", {})
  .n("SESClient", "GetAccountSendingEnabledCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountSendingEnabledCommand)
  .de(de_GetAccountSendingEnabledCommand)
  .build() {}
