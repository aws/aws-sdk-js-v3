// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { CreateAddressListRequest, CreateAddressListResponse } from "../models/models_0";
import { CreateAddressList } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAddressListCommand}.
 */
export interface CreateAddressListCommandInput extends CreateAddressListRequest {}
/**
 * @public
 *
 * The output of {@link CreateAddressListCommand}.
 */
export interface CreateAddressListCommandOutput extends CreateAddressListResponse, __MetadataBearer {}

/**
 * <p>Creates a new address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // CreateAddressListRequest
 *   ClientToken: "STRING_VALUE",
 *   AddressListName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAddressListCommand(input);
 * const response = await client.send(command);
 * // { // CreateAddressListResponse
 * //   AddressListId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAddressListCommandInput - {@link CreateAddressListCommandInput}
 * @returns {@link CreateAddressListCommandOutput}
 * @see {@link CreateAddressListCommandInput} for command's `input` shape.
 * @see {@link CreateAddressListCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
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
export class CreateAddressListCommand extends $Command
  .classBuilder<
    CreateAddressListCommandInput,
    CreateAddressListCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "CreateAddressList", {})
  .n("MailManagerClient", "CreateAddressListCommand")
  .sc(CreateAddressList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAddressListRequest;
      output: CreateAddressListResponse;
    };
    sdk: {
      input: CreateAddressListCommandInput;
      output: CreateAddressListCommandOutput;
    };
  };
}
