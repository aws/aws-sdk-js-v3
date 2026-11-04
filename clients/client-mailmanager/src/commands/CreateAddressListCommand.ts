// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAddressListRequest, CreateAddressListResponse } from "../models/models_0";
import { CreateAddressList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new address list.
 *
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
 *
 * Occurs when a user is denied access to a specific resource or action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Occurs when an operation exceeds a predefined service quota or limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
 *
 * @public
 */
export class CreateAddressListCommand extends command<CreateAddressListCommandInput, CreateAddressListCommandOutput>(
  _ep0,
  _mw0,
  "CreateAddressList",
  CreateAddressList$
) {
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
