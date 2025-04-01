// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ActivateEmailContactRequest,
  ActivateEmailContactRequestFilterSensitiveLog,
  ActivateEmailContactResponse,
} from "../models/models_0";
import {
  NotificationsContactsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NotificationsContactsClient";
import { de_ActivateEmailContactCommand, se_ActivateEmailContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateEmailContactCommand}.
 */
export interface ActivateEmailContactCommandInput extends ActivateEmailContactRequest {}
/**
 * @public
 *
 * The output of {@link ActivateEmailContactCommand}.
 */
export interface ActivateEmailContactCommandOutput extends ActivateEmailContactResponse, __MetadataBearer {}

/**
 * <p>Activates an email contact using an activation code. This code is in the activation email sent to the email address associated with this email contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, ActivateEmailContactCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, ActivateEmailContactCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * const client = new NotificationsContactsClient(config);
 * const input = { // ActivateEmailContactRequest
 *   arn: "STRING_VALUE", // required
 *   code: "STRING_VALUE", // required
 * };
 * const command = new ActivateEmailContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivateEmailContactCommandInput - {@link ActivateEmailContactCommandInput}
 * @returns {@link ActivateEmailContactCommandOutput}
 * @see {@link ActivateEmailContactCommandInput} for command's `input` shape.
 * @see {@link ActivateEmailContactCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ActivateEmailContactCommand extends $Command
  .classBuilder<
    ActivateEmailContactCommandInput,
    ActivateEmailContactCommandOutput,
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
  .s("NotificationsContacts", "ActivateEmailContact", {})
  .n("NotificationsContactsClient", "ActivateEmailContactCommand")
  .f(ActivateEmailContactRequestFilterSensitiveLog, void 0)
  .ser(se_ActivateEmailContactCommand)
  .de(de_ActivateEmailContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateEmailContactRequest;
      output: {};
    };
    sdk: {
      input: ActivateEmailContactCommandInput;
      output: ActivateEmailContactCommandOutput;
    };
  };
}
