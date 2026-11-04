// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEmailContactRequest, GetEmailContactResponse } from "../models/models_0";
import { GetEmailContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEmailContactCommand}.
 */
export interface GetEmailContactCommandInput extends GetEmailContactRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailContactCommand}.
 */
export interface GetEmailContactCommandOutput extends GetEmailContactResponse, __MetadataBearer {}

/**
 * Returns an email contact.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, GetEmailContactCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, GetEmailContactCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * // import type { NotificationsContactsClientConfig } from "@aws-sdk/client-notificationscontacts";
 * const config = {}; // type is NotificationsContactsClientConfig
 * const client = new NotificationsContactsClient(config);
 * const input = { // GetEmailContactRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetEmailContactCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailContactResponse
 * //   emailContact: { // EmailContact
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     address: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEmailContactCommandInput - {@link GetEmailContactCommandInput}
 * @returns {@link GetEmailContactCommandOutput}
 * @see {@link GetEmailContactCommandInput} for command's `input` shape.
 * @see {@link GetEmailContactCommandOutput} for command's `response` shape.
 * @see {@link NotificationsContactsClientResolvedConfig | config} for NotificationsContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetEmailContactCommand extends command<GetEmailContactCommandInput, GetEmailContactCommandOutput>(
  _ep0,
  _mw0,
  "GetEmailContact",
  GetEmailContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEmailContactRequest;
      output: GetEmailContactResponse;
    };
    sdk: {
      input: GetEmailContactCommandInput;
      output: GetEmailContactCommandOutput;
    };
  };
}
