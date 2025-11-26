// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { GetAddressListRequest, GetAddressListResponse } from "../models/models_0";
import { GetAddressList } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAddressListCommand}.
 */
export interface GetAddressListCommandInput extends GetAddressListRequest {}
/**
 * @public
 *
 * The output of {@link GetAddressListCommand}.
 */
export interface GetAddressListCommandOutput extends GetAddressListResponse, __MetadataBearer {}

/**
 * <p>Fetch attributes of an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetAddressListRequest
 *   AddressListId: "STRING_VALUE", // required
 * };
 * const command = new GetAddressListCommand(input);
 * const response = await client.send(command);
 * // { // GetAddressListResponse
 * //   AddressListId: "STRING_VALUE", // required
 * //   AddressListArn: "STRING_VALUE", // required
 * //   AddressListName: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   LastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAddressListCommandInput - {@link GetAddressListCommandInput}
 * @returns {@link GetAddressListCommandOutput}
 * @see {@link GetAddressListCommandInput} for command's `input` shape.
 * @see {@link GetAddressListCommandOutput} for command's `response` shape.
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
export class GetAddressListCommand extends $Command
  .classBuilder<
    GetAddressListCommandInput,
    GetAddressListCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "GetAddressList", {})
  .n("MailManagerClient", "GetAddressListCommand")
  .sc(GetAddressList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAddressListRequest;
      output: GetAddressListResponse;
    };
    sdk: {
      input: GetAddressListCommandInput;
      output: GetAddressListCommandOutput;
    };
  };
}
