// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivateEmailContactRequest, ActivateEmailContactResponse } from "../models/models_0";
import { ActivateEmailContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Activates an email contact using an activation code. This code is in the activation email sent to the email address associated with this email contact.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, ActivateEmailContactCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, ActivateEmailContactCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * // import type { NotificationsContactsClientConfig } from "@aws-sdk/client-notificationscontacts";
 * const config = {}; // type is NotificationsContactsClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Your request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link NotificationsContactsServiceException}
 *
 * Base exception class for all service exceptions from NotificationsContacts service.
 *
 * @public
 */
export class ActivateEmailContactCommand extends command<ActivateEmailContactCommandInput, ActivateEmailContactCommandOutput>(
  _ep0,
  _mw0,
  "ActivateEmailContact",
  ActivateEmailContact$
) {
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
