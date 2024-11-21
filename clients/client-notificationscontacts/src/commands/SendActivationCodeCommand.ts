// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendActivationCodeRequest, SendActivationCodeResponse } from "../models/models_0";
import {
  NotificationsContactsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NotificationsContactsClient";
import { de_SendActivationCodeCommand, se_SendActivationCodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendActivationCodeCommand}.
 */
export interface SendActivationCodeCommandInput extends SendActivationCodeRequest {}
/**
 * @public
 *
 * The output of {@link SendActivationCodeCommand}.
 */
export interface SendActivationCodeCommandOutput extends SendActivationCodeResponse, __MetadataBearer {}

/**
 * <p>Sends an activation email to the email address associated with the specified email contact.</p>
 *          <note>
 *             <p>It might take a few minutes for the activation email to arrive. If it doesn't arrive, check in your spam folder or try sending another activation email.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, SendActivationCodeCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, SendActivationCodeCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * const client = new NotificationsContactsClient(config);
 * const input = { // SendActivationCodeRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new SendActivationCodeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendActivationCodeCommandInput - {@link SendActivationCodeCommandInput}
 * @returns {@link SendActivationCodeCommandOutput}
 * @see {@link SendActivationCodeCommandInput} for command's `input` shape.
 * @see {@link SendActivationCodeCommandOutput} for command's `response` shape.
 * @see {@link NotificationsContactsClientResolvedConfig | config} for NotificationsContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Your request references a resource which does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link NotificationsContactsServiceException}
 * <p>Base exception class for all service exceptions from NotificationsContacts service.</p>
 *
 * @public
 */
export class SendActivationCodeCommand extends $Command
  .classBuilder<
    SendActivationCodeCommandInput,
    SendActivationCodeCommandOutput,
    NotificationsContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NotificationsContacts", "SendActivationCode", {})
  .n("NotificationsContactsClient", "SendActivationCodeCommand")
  .f(void 0, void 0)
  .ser(se_SendActivationCodeCommand)
  .de(de_SendActivationCodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendActivationCodeRequest;
      output: {};
    };
    sdk: {
      input: SendActivationCodeCommandInput;
      output: SendActivationCodeCommandOutput;
    };
  };
}
