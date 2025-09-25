// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { ListAddressListsRequest, ListAddressListsResponse } from "../models/models_0";
import { ListAddressLists } from "../schemas/schemas_1_Address";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAddressListsCommand}.
 */
export interface ListAddressListsCommandInput extends ListAddressListsRequest {}
/**
 * @public
 *
 * The output of {@link ListAddressListsCommand}.
 */
export interface ListAddressListsCommandOutput extends ListAddressListsResponse, __MetadataBearer {}

/**
 * <p>Lists address lists for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListAddressListsCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListAddressListsCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListAddressListsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListAddressListsCommand(input);
 * const response = await client.send(command);
 * // { // ListAddressListsResponse
 * //   AddressLists: [ // AddressLists // required
 * //     { // AddressList
 * //       AddressListId: "STRING_VALUE", // required
 * //       AddressListArn: "STRING_VALUE", // required
 * //       AddressListName: "STRING_VALUE", // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAddressListsCommandInput - {@link ListAddressListsCommandInput}
 * @returns {@link ListAddressListsCommandOutput}
 * @see {@link ListAddressListsCommandInput} for command's `input` shape.
 * @see {@link ListAddressListsCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class ListAddressListsCommand extends $Command
  .classBuilder<
    ListAddressListsCommandInput,
    ListAddressListsCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "ListAddressLists", {})
  .n("MailManagerClient", "ListAddressListsCommand")
  .sc(ListAddressLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAddressListsRequest;
      output: ListAddressListsResponse;
    };
    sdk: {
      input: ListAddressListsCommandInput;
      output: ListAddressListsCommandOutput;
    };
  };
}
