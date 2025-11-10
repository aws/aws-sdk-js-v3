// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { ListMembersOfAddressListRequest, ListMembersOfAddressListResponse } from "../models/models_0";
import { ListMembersOfAddressList } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMembersOfAddressListCommand}.
 */
export interface ListMembersOfAddressListCommandInput extends ListMembersOfAddressListRequest {}
/**
 * @public
 *
 * The output of {@link ListMembersOfAddressListCommand}.
 */
export interface ListMembersOfAddressListCommandOutput extends ListMembersOfAddressListResponse, __MetadataBearer {}

/**
 * <p>Lists members of an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListMembersOfAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListMembersOfAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListMembersOfAddressListRequest
 *   AddressListId: "STRING_VALUE", // required
 *   Filter: { // AddressFilter
 *     AddressPrefix: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListMembersOfAddressListCommand(input);
 * const response = await client.send(command);
 * // { // ListMembersOfAddressListResponse
 * //   Addresses: [ // SavedAddresses // required
 * //     { // SavedAddress
 * //       Address: "STRING_VALUE", // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMembersOfAddressListCommandInput - {@link ListMembersOfAddressListCommandInput}
 * @returns {@link ListMembersOfAddressListCommandOutput}
 * @see {@link ListMembersOfAddressListCommandInput} for command's `input` shape.
 * @see {@link ListMembersOfAddressListCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
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
export class ListMembersOfAddressListCommand extends $Command
  .classBuilder<
    ListMembersOfAddressListCommandInput,
    ListMembersOfAddressListCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "ListMembersOfAddressList", {})
  .n("MailManagerClient", "ListMembersOfAddressListCommand")
  .sc(ListMembersOfAddressList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembersOfAddressListRequest;
      output: ListMembersOfAddressListResponse;
    };
    sdk: {
      input: ListMembersOfAddressListCommandInput;
      output: ListMembersOfAddressListCommandOutput;
    };
  };
}
