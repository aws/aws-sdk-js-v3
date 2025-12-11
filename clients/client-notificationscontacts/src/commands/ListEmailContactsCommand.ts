// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEmailContactsRequest, ListEmailContactsResponse } from "../models/models_0";
import type {
  NotificationsContactsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NotificationsContactsClient";
import { ListEmailContacts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEmailContactsCommand}.
 */
export interface ListEmailContactsCommandInput extends ListEmailContactsRequest {}
/**
 * @public
 *
 * The output of {@link ListEmailContactsCommand}.
 */
export interface ListEmailContactsCommandOutput extends ListEmailContactsResponse, __MetadataBearer {}

/**
 * <p>Lists all email contacts created under the Account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, ListEmailContactsCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, ListEmailContactsCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * // import type { NotificationsContactsClientConfig } from "@aws-sdk/client-notificationscontacts";
 * const config = {}; // type is NotificationsContactsClientConfig
 * const client = new NotificationsContactsClient(config);
 * const input = { // ListEmailContactsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEmailContactsCommand(input);
 * const response = await client.send(command);
 * // { // ListEmailContactsResponse
 * //   nextToken: "STRING_VALUE",
 * //   emailContacts: [ // EmailContacts // required
 * //     { // EmailContact
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       address: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEmailContactsCommandInput - {@link ListEmailContactsCommandInput}
 * @returns {@link ListEmailContactsCommandOutput}
 * @see {@link ListEmailContactsCommandInput} for command's `input` shape.
 * @see {@link ListEmailContactsCommandOutput} for command's `response` shape.
 * @see {@link NotificationsContactsClientResolvedConfig | config} for NotificationsContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
export class ListEmailContactsCommand extends $Command
  .classBuilder<
    ListEmailContactsCommandInput,
    ListEmailContactsCommandOutput,
    NotificationsContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NotificationsContacts", "ListEmailContacts", {})
  .n("NotificationsContactsClient", "ListEmailContactsCommand")
  .sc(ListEmailContacts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEmailContactsRequest;
      output: ListEmailContactsResponse;
    };
    sdk: {
      input: ListEmailContactsCommandInput;
      output: ListEmailContactsCommandOutput;
    };
  };
}
