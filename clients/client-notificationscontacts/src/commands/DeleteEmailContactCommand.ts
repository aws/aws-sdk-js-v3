// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEmailContactRequest, DeleteEmailContactResponse } from "../models/models_0";
import { DeleteEmailContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEmailContactCommand}.
 */
export interface DeleteEmailContactCommandInput extends DeleteEmailContactRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailContactCommand}.
 */
export interface DeleteEmailContactCommandOutput extends DeleteEmailContactResponse, __MetadataBearer {}

/**
 * Deletes an email contact.
 *
 * > **Note:** Deleting an email contact removes it from all associated notification configurations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, DeleteEmailContactCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, DeleteEmailContactCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * // import type { NotificationsContactsClientConfig } from "@aws-sdk/client-notificationscontacts";
 * const config = {}; // type is NotificationsContactsClientConfig
 * const client = new NotificationsContactsClient(config);
 * const input = { // DeleteEmailContactRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEmailContactCommandInput - {@link DeleteEmailContactCommandInput}
 * @returns {@link DeleteEmailContactCommandOutput}
 * @see {@link DeleteEmailContactCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailContactCommandOutput} for command's `response` shape.
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
export class DeleteEmailContactCommand extends command<DeleteEmailContactCommandInput, DeleteEmailContactCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEmailContact",
  DeleteEmailContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailContactRequest;
      output: {};
    };
    sdk: {
      input: DeleteEmailContactCommandInput;
      output: DeleteEmailContactCommandOutput;
    };
  };
}
